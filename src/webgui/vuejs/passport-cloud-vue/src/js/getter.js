// getter.js


// 把 “a.b.c.d” 形式的字符串解析为字段名的数组
function parseFields(fields) {
    let dst = []
    if (fields == null) {
        return dst
    }
    let str = "." + fields
    let src = str.split(".")
    for (var i in src) {
        let name = src[i];
        if (name == null) {
            continue
        }
        name = name.trim()
        if (name == "") {
            continue
        }
        dst.push(name)
    }
    return dst
}



/***
 * Get(fields:string, root:object, defaultValue:object)
*/
function Get(fields, root, defaultValue) {
    let p = root
    let namelist = parseFields(fields)
    for (var i in namelist) {
        if (p == null) {
            break
        }
        let name = namelist[i]
        p = p[name]
    }
    if (p == null) {
        p = defaultValue
    }
    return p
}


export default {
    Get
}
