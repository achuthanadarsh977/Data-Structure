var Single = /** @class */ (function () {
    function Single(value) {
        this.next = null;
        this.value = value;
    }
    return Single;
}());
var Singlelist = /** @class */ (function () {
    function Singlelist() {
        this.head = null;
    }
    Singlelist.prototype.append = function (value) {
        var newNode = new Single(value);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        var current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
    };
    Singlelist.prototype.prepend = function (value) {
        var newNode = new Single(value);
        newNode.next = this.head;
        this.head = newNode;
    };
    Singlelist.prototype.delete = function (value) {
        if (!this.head) {
            return;
        }
        if (this.head.value === value) {
            this.head = this.head.next;
            return;
        }
        var current = this.head;
        while (current.next && current.next.value !== value) {
            current = current.next;
        }
        if (current.next) {
            current.next = current.next.next;
        }
    };
    Singlelist.prototype.print = function () {
        var current = this.head;
        var listValues = "";
        while (current) {
            listValues += current.value + "->";
            current = current.next;
        }
        listValues += null;
        console.log(listValues);
    };
    return Singlelist;
}());
var single1 = new Single(10);
var single2 = new Single(20);
var single3 = new Single(30);
single1.next = single2;
single2.next = single3;
var list = new Singlelist();
list.append(10);
list.append(20);
list.append(30);
list.prepend(5);
list.print();
