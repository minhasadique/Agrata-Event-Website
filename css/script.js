
	const fadeOut=()=>{
        const loaderwrapper=
        document.querySelector('.loader-wrapper');
        loaderwrapper.classList.add('fade');
    }

    window.addEventListener('load',fadeOut);