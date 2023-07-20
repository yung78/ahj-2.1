export default class Parse {
  constructor(data) {
    this.data = data;
    this.container = document.querySelector('.container');
    this.tableHeaders = document.querySelectorAll('th');
    this.trArry = [];
    this.atibutes = ['data-id', 'data-title', 'data-year', 'data-imdb'];
  }

  createDomElements() {
    console.log(this.data.length);

    for (let i = 0; i < this.data.length; i += 1) {
      const tr = document.createElement('tr');

      tr.setAttribute('data-id', this.data[i].id);
      tr.setAttribute('data-title', this.data[i].title);
      tr.setAttribute('data-year', this.data[i].year);
      tr.setAttribute('data-imdb', this.data[i].imdb);

      tr.innerHTML = `
        <td>${this.data[i].id}</td>
        <td>${this.data[i].title}</td>
        <td>${this.data[i].year}</td>
        <td>${this.data[i].imdb.toFixed(2)}</td>
      `;

      this.trArry.push(tr);
      this.container.append(tr);
    }
  }

  rotationShow() {
    let id = 0;
    let counter = 0;

    setInterval(() => {
      counter += 1;

      this.trArry.forEach((el) => el.remove());

      if (counter % 2 !== 0) {
        if (document.querySelector('.filtered_reverce')) {
          document.querySelector('.filtered_reverce').className = '';
        }

        this.tableHeaders[id].className = 'filtered';

        if (this.atibutes[id] !== 'data-title') {
          this.trArry.sort((a, b) => a.getAttribute(this.atibutes[id]) - b.getAttribute(this.atibutes[id])).forEach((el) => this.container.append(el));
        } else {
          this.trArry.sort((a, b) => a.getAttribute(this.atibutes[id]).localeCompare(b.getAttribute(this.atibutes[id]))).forEach((el) => this.container.append(el));
        }
      } else {
        this.tableHeaders[id].className = 'filtered_reverce';
        if (this.atibutes[id] !== 'data-title') {
          this.trArry.sort((a, b) => b.getAttribute(this.atibutes[id]) - a.getAttribute(this.atibutes[id])).forEach((el) => this.container.append(el));
        } else {
          this.trArry.sort((a, b) => b.getAttribute(this.atibutes[id]).localeCompare(a.getAttribute(this.atibutes[id]))).forEach((el) => this.container.append(el));
        }
      }

      if (counter === 2) {
        counter = 0;
        id += 1;
      }

      if (id === 4) {
        id = 0;
      }
    }, 2000);
  }
}
