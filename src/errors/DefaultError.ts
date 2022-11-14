export default class DefaultError extends Error {
  private code = 500;

  get statusCode() {
    return this.code;
  }
}
