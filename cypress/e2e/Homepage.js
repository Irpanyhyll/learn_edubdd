class Homepage {
    searchBox = '#searchTerm'; // Lokator elemen search box

    visit() {
        cy.visit('http://zero.webappsecurity.com/index.html'); // Mengunjungi homepage
    }

    searchFor(term) {
        cy.get(this.searchBox).type(`${term} {enter}`); // Memasukkan teks pencarian
    }
}

export default Homepage;
