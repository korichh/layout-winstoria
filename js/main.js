const main = function() {
    const mobileNav = document.querySelector('.mobile-nav');
    const contentNav = document.querySelector('.content-nav');
    const contentAcc = document.querySelector('.content-acc');
    const goTop = document.querySelector('.go-top');
    const copyButtons = document.querySelectorAll('.button-copy');
    const selectLang = document.querySelector('.select_lang');

    if (mobileNav) {
        const openNav = () => {
            document.body.classList.add('_lock');
            mobileNav.classList.add('_active')
        }
        const closeNav = () => {
            document.body.classList.remove('_lock');
            mobileNav.classList.remove('_active')
        }

        document.addEventListener('click', (e) => {
            if (e.target.closest('.header-burger')) {
                openNav()
            } else if (!e.target.closest('.mnav-inner') || e.target.closest('.mnav-close')) {
                closeNav()
            }
        })
    }

    if (contentNav) {
        const toggle = contentNav.querySelector('.nav-toggle');

        const toggleNav = () => {
            contentNav.classList.toggle('_active');
        }

        toggle.addEventListener('click', toggleNav);
    }

    if (contentAcc) {
        const accs = contentAcc.querySelectorAll('.acc-item button')

        for (const acc of accs) {
            acc.addEventListener('click', () => {
                const inner = acc.closest('.acc-inner')
                inner.classList.toggle('_active');
            })
        }
    }

    if (goTop) {
        const checkScroll = () => {
            if (scrollY > 40) {
                if (!goTop.classList.contains('_active'))
                    goTop.classList.add('_active')
            } else {
                if (goTop.classList.contains('_active'))
                    goTop.classList.remove('_active')
            }
        }

        document.addEventListener('scroll', checkScroll);
        checkScroll();
    }

    if (copyButtons.length > 0) {
        function copyToClipboard(e) {
            const btnCopy = e.target.closest('button')
            const textarea = document.createElement("textarea");

            textarea.id = "temp_element";
            textarea.style.height = 0;
            document.body.appendChild(textarea);
            textarea.value = btnCopy.querySelector('.to-copy').innerText;

            const selector = document.querySelector("#temp_element");
            selector.select();
            document.execCommand("copy");
            document.body.removeChild(textarea);

            btnCopy.classList.add("copied");

            const temp = setInterval(function() {
                btnCopy.classList.remove("copied");
                clearInterval(temp);
            }, 1000);
        }

        for (const button of copyButtons) {
            button.addEventListener('click', copyToClipboard)
        }
    }

    if (selectLang) {
        const btn = selectLang.querySelector('.btn_lang');

        const toggleList = () => {
            selectLang.classList.toggle('_active');
        }

        const closeList = () => {
            if (selectLang.classList.contains('_active'))
                selectLang.classList.remove('_active');
        }

        btn.addEventListener('click', toggleList)
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.select_lang')) closeList();
        })
    }
}();