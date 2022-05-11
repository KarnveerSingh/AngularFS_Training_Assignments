import { GradepipePipe } from './gradepipe.pipe';

let pipe:GradepipePipe;
beforeEach(() => {
  pipe = new GradepipePipe();
});


describe('GradepipePipe', () => {

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return "OutStanding" when input is 1', () => {
    let result = pipe.transform(1);
    expect(result).toBe("OutStanding");

  });

  it('should return "Excellent" when input is 2', () => {
    let result = pipe.transform(2);
    expect(result).toBe("Excellent");

  });


  it('should return "Good" when input is 3', () => {
    let result = pipe.transform(3);
    expect(result).toBe("Good");

  });


  it('should return "Average" when input is 4', () => {
    let result = pipe.transform(4);
    expect(result).toBe("Average");

  });

  it('should return "Poor" when input is 5', () => {
    let result = pipe.transform(5);
    expect(result).toBe("Poor");

  });


  it('should return "empty string" when input is invalid grade', () => {
    let result = pipe.transform(45);
    expect(result).toBe("");

  });


});
