import { Report } from 'notiflix/build/notiflix-report-aio';

export function save(key, value) {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    Report.failure(
      'Notiflix Failure',
      '"Failure is simply the opportunity to begin again, this time more intelligently." <br/><br/>- Henry Ford',
      'Okey... Fix it',
      () => {
        location.reload();
      }
    );
  }
}

export function load(key) {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? [] : JSON.parse(serializedState);
  } catch (error) {
    Report.failure(
      'Notiflix Failure',
      '"Failure is simply the opportunity to begin again, this time more intelligently." <br/><br/>- Henry Ford',
      'Okey... Fix it',
      () => {
        location.reload();
      }
    );
  }
}
