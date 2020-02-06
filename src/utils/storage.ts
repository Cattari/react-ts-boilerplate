import isString from 'lodash/isString';

class LocaleStorage {
  private PREFIX = 'wow_super_app';

  /**
   * Get item
   * @param {string} `${PREFIX}_${key}` Unique key
   * @return {string | false} Value from locale storage
   */
  get = (key: string) => {
    try {
      return localStorage.getItem(`${this.PREFIX}_${key}`);
    } catch (err) {
      /* tslint:disable */
      console.warn('Error ', err);
      /* tslint:enable */
      return false;
    }
  };

  /**
   * Set item
   * @param {string} `${PREFIX}_${key}` Unique key
   * @param {any} value Value to set into locale storage
   */
  set = (key: string, value: string | [] | {} | number) => {
    if (!!value) {
      const storageValue = isString(value) ? value : JSON.stringify(value);
      localStorage.setItem(`${this.PREFIX}_${key}`, storageValue);
    }
  };

  /**
   * Remove item
   * @param {string} `${PREFIX}_${key}` Unique key
   */
  remove = (key: string) => {
    localStorage.removeItem(`${this.PREFIX}_${key}`);
  };
}

const instance = new LocaleStorage();
export default instance;
