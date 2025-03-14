import { extend, override } from 'flarum/common/extend';
import app from 'flarum/forum/app';
import LogInButtons from 'flarum/forum/components/LogInButtons';
import LogInButton from 'flarum/forum/components/LogInButton';
import HeaderSecondary from 'flarum/forum/components/HeaderSecondary';
import EditUserModal from 'flarum/common/components/EditUserModal';
import IndexPage from 'flarum/forum/components/IndexPage';
import DiscussionComposer from 'flarum/forum/components/DiscussionComposer';
import SignUpModal from 'flarum/forum/components/SignUpModal';
import Stream from 'flarum/common/utils/Stream';
import LogInModal from 'flarum/forum/components/LogInModal';

app.initializers.add('vkarchevskyi-fof-passport', () => {
  extend(LogInButtons.prototype, 'items', function (items) {
    items.add(
      'vkarchevskyi-fof-passport',
      LogInButton.component(
        {
          className: 'Button LogInButton--passport',
          icon: app.forum.attribute('vkarchevskyi-fof-passport.loginIcon'),
          path: '/auth/passport',
        },
        app.forum.attribute('vkarchevskyi-fof-passport.loginTitle')
      )
    );
  });

  override(HeaderSecondary.prototype, 'items', function (original) {
    const items = original();

    if (items.has('logIn')) {
      items.setContent(
        'logIn',
        LogInButton.component(
          {
            className: 'LinksButton Button Button--link LogInButton--passport',
            path: '/auth/passport',
          },
          'Log In'
        )
      );
    }

    if (items.has('signUp')) {
      items.setContent(
        'signUp',
        LogInButton.component(
          {
            className: 'LinksButton Button Button--link SignUpButton--passport',
            path: '/auth/passport?to_registration=1',
          },
          'Sign Up'
        )
      );
    }

    return items;
  });

  override(EditUserModal.prototype, 'fields', (original) => {
    const items = original();

    if (!app.session.user.isAdmin()) {
      items.remove('username');
    }

    return items;
  });

  override(IndexPage.prototype, 'newDiscussionAction', function () {
    return new Promise((resolve, reject) => {
      if (app.session.user) {
        app.composer.load(DiscussionComposer, { user: app.session.user });
        app.composer.show();

        return resolve(app.composer);
      } else {
        document.querySelector('.LogInButton--passport').click();

        return reject();
      }
    });
  });

  override(SignUpModal.prototype, 'oninit', function (original, vnode) {
    original(vnode);

    if (app.forum.attribute('displayNameDriver') !== 'nickname') return;

    this.originalNickname = Stream(this.attrs.nickname || '');
  });

  extend(SignUpModal.prototype, 'oncreate', () => {
    document.querySelector('.SignUpModal form button[type="submit"]').click();
  });

  override(SignUpModal.prototype, 'onsubmit', function (original, e) {
    e.preventDefault();

    this.loading = true;

    const body = this.submitData();
    body.nickname = this.originalNickname();

    app
      .request({
        url: app.forum.attribute('baseUrl') + '/register',
        method: 'POST',
        body,
        errorHandler: this.onerror.bind(this),
      })
      .then(() => window.location.reload(), this.loaded.bind(this));
  });

  override(LogInModal.prototype, 'oninit', () => {
    document.querySelector('.Button.LogInButton--passport').click();
    document.querySelector('body').style.display = 'block';
    document.querySelector('#modal').remove();
  });
});
