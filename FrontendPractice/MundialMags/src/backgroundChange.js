// backgroundChange.js
document.addEventListener('scroll', function() {
    const issues = document.querySelectorAll('.issue');
    issues.forEach(issue => {
        const rect = issue.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            switch (issue.id) {
                case 'issue-02':
                    document.body.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--issue-02');
                    break;
                case 'issue-09':
                    document.body.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--issue-09');
                    break;
                case 'issue-10':
                    document.body.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--issue-10');
                    break;
                case 'issue-16':
                    document.body.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--issue-16');
                    break;
                case 'issue-22':
                    document.body.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--issue-22');
                    break;
                case 'issue-28':
                    document.body.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--issue-28');
                    break;
                case 'issue-29':
                    document.body.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--issue-29');
                    break;
            }
        }
    });
});
