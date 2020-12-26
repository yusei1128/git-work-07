// 文字列　メソッド

/// toUpperCase()



console.log ('Jack'. toUpperCase());

const a = String.prototype.toUpperCase.call({
    toString:function toString() {
        return 'magic' ;
    }
})

const y = String.prototype.toUpperCase.call(true);

console.log(a, y);



// スプリット() // split

const str = 'jack mario friend was jjjj  ikou.';

const words = str.split(' ');
console.log(words[1]);

const chars = str.split(' ');
console.log(chars[3]);

const strCopy = str.split();
console.log(strCopy);


// サブストリング() // substrung

const yyy = 'joker';
console.log(yyy.substring(0, 2));

console.log(yyy.substring(2));


// 配列　メソッド　//

// コンキャット() concat
const array1 = ['yy', 'tt', 'oi'];
const array2 = ['h', 'u', 'ww'];
const array3 = array1.concat(array2);

console.log(array3);

// find()　ファインド
const array4 = [41, 9, 33, 88, 39, 19, 6];

const found = array4. find(element => element > 66);

console.log(found);

// map() マップ
const arra5 = [5, 6, 7, 9];

//pass a function to map
const map1 = arra5.map(x => x * 2);
console.log(map1);