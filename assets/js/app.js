Vue.component('comment-component', {
  data: function() {
    return {
      tambah: false,
      kurang: false,
    }
  },
  template: '#comment-template',
  props: ['comment'],
  methods: {
    plus: function() {
      this.tambah = !this.tambah;
      this.kurang = false;
    },
    minus: function() {
      this.tambah = false;
      this.kurang = !this.kurang;
    }
  },
  computed: {
    score: function() {
      if(this.tambah) {
        return this.comment.score + 1;
      } else if(this.kurang) {
        return this.comment.score - 1;
      } else {
        return this.comment.score;
      }
    }
  }
});

let app = new Vue({
  el: '#app',
  data: {
    comments: [
      { isi: 'komentar 1 komentar 1 komentar 1', waktu: '21-12-2020', score: 0 },
      { isi: 'komentar 2 komentar 2 komentar 2', waktu: '21-12-2020', score: 5 },
      { isi: 'komentar 3 komentar 3 komentar 3', waktu: '21-12-2020', score: 9 },
    ],
    new_comments: '',
  },
  methods: {
    postComment: function() {
      this.comments.push({
        isi: this.new_comments,
        waktu: '22-12-2020',
        score: 0,
      });
      this.new_comments = '';
    }
  }
});