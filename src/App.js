import React, { PureComponent } from "react";
import logo from './logo.svg';
import './App.css';
import searchImages from "./searchImages";
import SearchResults from "./SearchResults";
import SearchInput from "./SearchInput";

export default class App extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            text: '',
            images: [],
            perPage: 20,
            page: 0,
            pages: 0,
            total: 0,
        };
    }

    handleSearch = value => {
        let page = this.state.page
        if(value !== this.state.text)
            page = 1
        this.setState({
            text: value,
        }, () => {
            searchImages(this.state.text, this.state.perPage, page).then(result => {
                console.log(result)
                this.setState({
                    images: result.photo,
                    page: result.page,
                    pages: result.pages,
                    total: result.total,
                });
            }).catch(reason => {
                console.error(reason)
            })
        });

    };

    prevPage = () => {
        if(this.state.page > 1)
            this.setState({
                page: this.state.page-1,
            }, () => this.handleSearch(this.state.text));
    }

    nextPage = () => {
        if(this.state.page < this.state.pages)
            this.setState({
                page: this.state.page+1,
            }, () => this.handleSearch(this.state.text));
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <SearchInput onSearch={this.handleSearch} />
                    <SearchResults images={this.state.images}/>

                    <div>
                        <div>found {this.state.total} images</div>
                        <div>Page {this.state.page} of {this.state.pages}</div>
                        <button onClick={this.prevPage}>prev</button>
                        <button onClick={this.nextPage}>next</button>
                    </div>
                </header>
            </div>
        );
    }
}
