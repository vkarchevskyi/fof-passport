<?php

/*
 * This file is part of fof/passport.
 *
 * Copyright (c) FriendsOfFlarum.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace FoF\Passport\Extenders;

use Flarum\Api\Serializer\ForumSerializer;
use Flarum\Locale\Translator;
use Flarum\Settings\SettingsRepositoryInterface;

class ForumAttributes
{
    /**
     * @var Translator
     */
    protected $translator;

    /**
     * @var SettingsRepositoryInterface
     */
    protected $settings;

    public function __construct(Translator $translator, SettingsRepositoryInterface $settings)
    {
        $this->translator = $translator;
        $this->settings = $settings;
    }

    public function __invoke(ForumSerializer $serializer): array
    {
        $attributes['vkarchevskyi-fof-passport.loginTitle'] = $this->settings->get('vkarchevskyi-fof-passport.button_title') ?: $this->translator->trans('vkarchevskyi-fof-passport.api.default-login-button-title');
        $attributes['vkarchevskyi-fof-passport.loginIcon'] = $this->settings->get('vkarchevskyi-fof-passport.button_icon') ?: 'far fa-id-card';

        return $attributes;
    }
}
