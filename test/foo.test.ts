export class Foo {

  test() {
    return 'foo';
  }
}

describe('foo', () => {
  it('test', () => {

    const foo = new Foo();

    expect(foo.test()).toEqual('foo')
  });
})