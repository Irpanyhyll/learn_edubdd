class SearchResultsPage {
    searchResultsHeading = 'h2'; // Lokator elemen heading hasil pencarian

    visitSearchResults() {
        cy.visit('http://zero.webappsecurity.com/search.html?searchTerm=Online Banking'); // Mengunjungi halaman hasil pencarian
    }

    verifySearchResultsHeading() {
        cy.get(this.searchResultsHeading).should('contain.text', 'Search Results:'); // Verifikasi hasil pencarian
    }
}

export default SearchResultsPage;
