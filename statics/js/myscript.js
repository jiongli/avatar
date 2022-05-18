window.$docsify = {
    name: 'Todo',
    repo: '',
    loadSidebar: true,// 侧边栏
    subMaxLevel: 2,// 同时根据侧边栏文件中的标题生成侧边栏，数值为标题显示到的等级
    alias: {
        '/.*/_sidebar.md': '/_sidebar.md'
    },// 从每个级别目录加载各自的侧边栏，如该目录没有侧边栏则加载上级的
    search: 'auto',
    search: {
        maxAge: 86400000, // Expiration time, the default one day 86400000
        paths: 'auto', // or 'auto'
        placeholder: 'Type to search',
        noData: 'No Results',
        // 搜索结果显示的标题等级, 1 - 6
        depth: 4,
        // 搜索时是否暂时隐藏侧边栏
        hideOtherSidebarContent: false, 
    }
}