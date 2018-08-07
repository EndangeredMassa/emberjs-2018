import { CompatComponent as Component } from 'ember-glimmer-component';
import { classNames } from '@ember-decorators/component';
import { computed } from '@ember-decorators/object';
import { lowerCase } from 'lodash-es';

@classNames('static-class')
export default class TomsterLogo extends Component {
  @computed('@filename', '@filetype')
  get tomsterPath() {
    let lowerFilename = lowerCase(this.filename);
    return `/img/${lowerFilename}.${this.filetype}`
  }
}
