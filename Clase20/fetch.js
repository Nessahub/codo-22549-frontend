function search(page){   
    //ahora invoco a
    const url = `https://reqres.in/api/users ${page >=1 ? `?page=${page}` : ''}`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const htmlUsers = Users(data.data);
            renderComponent('users',htmlUsers);
            
            //ahora "cargo" el componente Paginator()
            const htmlPaginator = Paginator(data);
            renderComponent('paginator',htmlPaginator);
        })
    }