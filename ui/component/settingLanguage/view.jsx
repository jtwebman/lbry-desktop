// @flow

import React, { useState } from 'react';
import { FormField } from 'component/common/form';
import Spinner from 'component/spinner';
import SUPPORTED_LANGUAGES from '../../constants/supported_languages';

type Props = {
  language: string,
  setLanguage: string => void,
};

function SettingLanguage(props: Props) {
  const { language, setLanguage } = props;

  const [previousLanguage, setPreviousLanguage] = useState(null);
  const languages = SUPPORTED_LANGUAGES;

  if (previousLanguage && language !== previousLanguage) {
    setPreviousLanguage(null);
  }

  function onLanguageChange(e) {
    const { value } = e.target;
    setPreviousLanguage(language);
    setLanguage(value);
  }

  return (
    <React.Fragment>
      <FormField
        name="language_select"
        type="select"
        label={__('Language')}
        onChange={onLanguageChange}
        value={language}
        helper={__(
          'Multi-language support is brand new and incomplete. Switching your language may have unintended consequences, like glossolalia.'
        )}
      >
        {Object.keys(languages).map(language => (
          <option key={language} value={language}>
            {languages[language]}
          </option>
        ))}
      </FormField>
      {previousLanguage && <Spinner type="small" />}
    </React.Fragment>
  );
}

export default SettingLanguage;
