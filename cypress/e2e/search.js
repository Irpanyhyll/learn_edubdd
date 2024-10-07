
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import Homepage from '../pages/Homepage';
import SearchResultsPage from '../pages/SearchResultsPage';

const homepage = new Homepage();
const searchResultsPage = new SearchResultsPage();

Given('I am on the Zero Web App Security homepage', () => {
    homepage.visit('http://zero.webappsecurity.com/index.html');
});

When('I enter {online banking} in the search box', (searchTerm) => {
    homepage.searchFor('Online Banking {enter}');
});

Then('I should see search results related to {string}', (searchTerm) => {
    searchResultsPage.visitSearchResults('http://zero.webappsecurity.com/search.html?searchTerm=Online Banking'); // Mengunjungi halaman hasil pencarian
    searchResultsPage.verifySearchResultsHeading('contain.text', 'Search Results:'); 
});

