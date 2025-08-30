var NodeTrie = /** @class */ (function () {
    function NodeTrie() {
        this.children = new Map();
        this.isWord = false;
    }
    return NodeTrie;
}());
var DataTrie = /** @class */ (function () {
    function DataTrie() {
        this.root = new NodeTrie();
    }
    DataTrie.prototype.insert = function (word) {
        var current = this.root;
        for (var i = 0; i < word.length; i++) {
            var char = word[i];
            if (!current.children.has(char)) {
                current.children.set(char, new NodeTrie());
            }
            current = current.children.get(char);
        }
        current.isWord = true;
    };
    DataTrie.prototype.search = function (word) {
        var current = this.root;
        for (var i = 0; i < word.length; i++) {
            var char = word[i];
            if (!current.children.has(char))
                return false;
            current = current.children.get(char); // ✅ FIXED
        }
        return current.isWord; // ✅ make sure it's an actual word
    };
    return DataTrie;
}());
var trie = new DataTrie();
trie.insert('don');
trie.insert('dog');
trie.insert('do');
console.log(trie.search('dog'));
console.log(trie.search('don'));
