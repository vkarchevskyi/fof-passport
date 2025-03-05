import { extend, override } from 'flarum/common/extend';
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
                    className: 'LogInButton--passport',
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
                    className: 'SignUpButton--passport',
                    path: '/auth/passport?to_registration=1',
                },
                'Sign Up'
            )
        );
    }

    return items
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

extend(SignUpModal.prototype, 'oncreate', () => {
    document.querySelector('.SignUpModal form button[type="submit"]').click();
});

override(LogInModal.prototype, 'oninit', () => {
    document.querySelector('.LogInButton--passport').click();
    document.querySelector('body').style.display = 'block';
    document.querySelector('#modal').remove();
});
