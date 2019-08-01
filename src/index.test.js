import ReactDOM from "react-dom";
import { mock } from "jest";
import { renderToDOM } from "./index";
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
const logger = createLogger({
    // ...options
});

describe("test ReactDOM.render", () => {
  const originalRender = ReactDOM.render;
  const originalGetElement = global.document.getElementById;
  beforeEach(() => {
    global.document.getElementById = () => true;
    ReactDOM.render = jest.fn();
  });
  afterAll(() => {
    global.document.getElementById = originalGetElement;
    ReactDOM.render = originalRender;
  });
  it("should call ReactDOM.render", () => {
    renderToDOM();
    expect(ReactDOM.render).toHaveBeenCalled();
  });

  it('should conditionally set middleware', () => {
    let middleware = process.env.NODE_ENV === 'test' ? [thunkMiddleware, logger] :  [thunkMiddleware ];
    expect(middleware.length).toBe(2);
  });
});