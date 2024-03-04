import './assets/scss/index.scss';
import Progress from './api/Progress';

new Progress('.progress', { initialValue: 50, animated: false, hidden: false });
