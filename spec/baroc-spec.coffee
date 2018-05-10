# Use the command `window:run-package-specs` (cmd-alt-ctrl-p) to run specs.
#
# To run a specific `it` or `describe` block add an `f` to the front (e.g. `fit`
# or `fdescribe`). Remove the `f` to unfocus the block.

describe "Baroc", ->
  grammar = null

  beforeEach ->
    waitsForPromise ->
      atom.packages.activatePackage('baroc')

    runs ->
      grammar = atom.grammars.grammarForScopeName('source.baroc')

  it "parses the grammar", ->
    expect(grammar).toBeDefined()
    expect(grammar.scopeName).toBe "source.baroc"

  
