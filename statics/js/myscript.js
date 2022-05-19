window.$docsify = {
    name: "Lij's NoteBook",
    repo: 'https://www.lijiong.cn',
    loadNavbar: true,
    search: 'auto',
    search: {
        maxAge: 3600000,
        paths: 'auto',
        placeholder: 'Type to search',
        noData: 'No Results',
        depth: 4,
        hideOtherSidebarContent: false,
    },
    copyCode: {
        buttonText: 'Copy to clipboard',
        errorText: 'Error',
        successText: 'Copied'
    },
    footer: {
        copy: '<hr/><span id="sitetime"></span><br/><span>Copyright &copy; 2018 - 至今</span>',
        auth: '<a href="https://www.lijiong.cn" target="_blank">🏷️ Avatar Blog</a> <span> 人生只有900个月</span>',
        style: 'text-align:center;',
    },
    timeUpdater: {
        text: '<hr/><div align="center">last update time: {docsify-updated}</div>',
        formatUpdated: '{YYYY}-{MM}-{DD} {HH}:{mm}:{ss}',
    },
}