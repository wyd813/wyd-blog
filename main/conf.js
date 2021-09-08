module.exports=function(accessKeyId='',accessKeySecret=''){
    return {
        "enter": "./mds",
        "out": "./dist",
        "menu": {
            "st":"./menu/st.json",
            "mds":"./menu/mds.json"
        },
        "ossPathSt": "https://wyd-blog-st.oss-cn-beijing.aliyuncs.com",
        "ossPathMds": "https://wyd-blog.oss-cn-hangzhou.aliyuncs.com",
        "bucketSt": {
            "region": "oss-cn-beijing",
            "accessKeyId": accessKeyId,
            "accessKeySecret": accessKeySecret,
            "endPoint": "oss-cn-beijing.aliyuncs.com",
            "bucket": "wyd-blog-st"
        },
        "bucketMds": {
            "region": "oss-cn-hangzhou",
            "accessKeyId": accessKeyId,
            "accessKeySecret": accessKeySecret,
            "endPoint": "oss-cn-beijing.aliyuncs.com",
            "bucket": "wyd-blog"
        }
    }
}
