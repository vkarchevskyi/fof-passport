import { extend, override } from 'flarum/common/extend';
import EditUserModal from "flarum/common/components/EditUserModal";
import app from 'flarum/forum/app';
import HeaderSecondary from 'flarum/forum/components/HeaderSecondary';
import LogInButton from 'flarum/forum/components/LogInButton';
import IndexPage from "flarum/forum/components/IndexPage";
import DiscussionComposer from "flarum/forum/components/DiscussionComposer";
import SignUpModal from "flarum/forum/components/SignUpModal";
import LogInModal from "flarum/forum/components/LogInModal";

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

    return items
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
            app.composer.load(DiscussionComposer, {user: app.session.user});
            app.composer.show();

            return resolve(app.composer);
        } else {
            document.querySelector('.LogInButton--passport').click();

            return reject();
        }
    });
});

extend(SignUpModal.prototype, 'oninit', function () {
    if (app.forum.attribute('displayNameDriver') !== 'nickname') return;

    this.nickname = Stream(this.attrs.nickname || '');
});

extend(SignUpModal.prototype, 'oncreate', () => {
    document.querySelector('.Button.SignUpModal form button[type="submit"]').click();
});

override(LogInModal.prototype, 'oninit', () => {
    document.querySelector('.Button.LogInButton--passport').click();
    document.querySelector('body').style.display = 'block';
    document.querySelector('#modal').remove();
});
