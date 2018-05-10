'use babel';

import BarocView from './baroc-view';
import { CompositeDisposable } from 'atom';

export default {

  barocView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.barocView = new BarocView(state.barocViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.barocView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'baroc:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.barocView.destroy();
  },

  serialize() {
    return {
      barocViewState: this.barocView.serialize()
    };
  },

  toggle() {
    console.log('Baroc was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
