let data = [
    {
        id: '001',
        name: 'Tel VanSry',
        gender: 'male',
        address: 'kampong Cham'
    },
    {
        id: '002',
        name: 'Tel VanSry',
        gender: 'male',
        address: 'kampong Cham'
    },
    {
        id: '003',
        name: 'Tel VanSry',
        gender: 'male',
        address: 'kampong Cham'
    },

    {
        id: '004',
        name: 'Tel VanSry',
        gender: 'male',
        address: 'kampong Cham'
    },
    {
        id: '005',
        name: 'Tel VanSry',
        gender: 'male',
        address: 'kampong Cham'
    },
    {
        id: '006',
        name: 'Tel VanSry',
        gender: 'male',
        address: 'kampong Cham'
    },
]
$(document).ready(function () {
    fetchData()
    mouseHover()
})
function fetchData() {
    let content = ''
    for (d of data) {
        content = `
         <tr onclick="clickRow(this), removeData(this)">
            <th scope="row">${d.id}</th>
            <td>${d.name}</td>
            <td>${d.gender}</td>
            <td>${d.address}</td>
         </tr>
        `
        $('tbody').append(content)
    }
}
function mouseHover() {
    $('tr').not(':first').hover(
        function () {
            $(this).toggleClass('hoverStyle')
        }
    );
}
function clickRow(removeTable) {
    $(removeTable).toggleClass('thColor')
}
function removeData(removeTable) {
    let cont = confirm("Click Ok for deleted")
    if (cont == true) {
        $(removeTable).remove()
    } else {
    }

}