import { OnlySingleErrorPipe } from './only-single-error.pipe';

describe('OnlySingleErrorPipe', () => {
  it('create an instance', () => {
    const pipe = new OnlySingleErrorPipe();
    expect(pipe).toBeTruthy();
  });
});
