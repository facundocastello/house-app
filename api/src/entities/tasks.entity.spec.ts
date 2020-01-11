import { Task } from './tasks.entity';

describe('Task', () => {
  it('should be defined', () => {
    expect(new Task()).toBeDefined();
  });
});
