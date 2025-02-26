import { extend } from 'flarum/common/extend';
import app from 'flarum/forum/app';
import LogInButtons from 'flarum/forum/components/LogInButtons';
import LogInButton from 'flarum/forum/components/LogInButton';
import ItemList from 'flarum/common/utils/ItemList';

app.initializers.add('vkarchevskyi-fof-passport', () => {
  extend(LogInButtons.prototype, 'items', function (items: ItemList) {
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
});
