import { Plugin } from 'obsidian';

export default class SelectedSearchHighlight extends Plugin {
  onload() {
    console.log('Loaded Selected Search Highlight');

    // Listen globally for clicks on search-result items
    this.registerDomEvent(document, 'click', (evt: MouseEvent) => {
      const clicked = (evt.target as HTMLElement).closest('.search-result-file');
      if (clicked) this.markSelected(clicked as HTMLElement);
    });
  }

  markSelected(el: HTMLElement) {
    // Clear existing
    document
      .querySelectorAll('.search-result-file.is-selected-search-result')
      .forEach((e) => e.classList.remove('is-selected-search-result'));

    // Add highlight class
    el.classList.add('is-selected-search-result');
  }
}

