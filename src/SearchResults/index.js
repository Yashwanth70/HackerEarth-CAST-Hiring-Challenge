import React,{Component} from 'react'
import {inject,observer} from 'mobx-react'
import {Link,Route} from 'react-router-dom';
import '../css/searchResults.css'
import SearchTags from './SearchTags'
import RepoList from './RepoList'
import SelectMenu from './SelectMenu'
import Loader from '../Loader'
import Pagination from './Pagination'
@inject(stores => ({
	searchTerm:stores.search.searchTerm,
	response:stores.search.response,
	isLoading:stores.search.isLoading,
	type:stores.search.type,
	alterFetch:() => {
		stores.search.alterFetch()
	},
	fetch:(searchTerm) => {
		stores.search.fetch(searchTerm);

	},
	
}))


@observer
export default class SearchResults extends Component{
	
	async componentWillMount(){
		const {term} = this.props.match.params
		const {prev} = this.props.searchTerm
		if(!this.props.response.items || (term!==prev)){
		 
		 await this.props.fetch(term)

		}
	}
	render(){
		const {response} = this.props
		console.log(response)
		return(
			<div>
			<SearchTags />
			{(!this.props.isLoading)
				?
				<div className="container2">
					<div className="partition">
						<div className="three-fourth">

							<div className="topper">
							<h3 className="topperHeading">{response.total_count} {this.props.type.toUpperCase()} Results</h3>
							<SelectMenu id="top"/>
						    </div>

						   <RepoList />
						   <Pagination />

					</div>
					<div className="one-fourth">
							<div className="lang-header">
								<h2>Languages</h2>
								<ul className="filter-list">
									<li><Link to={`/repo/Python`} className="noUnderline1">
										<a>Python</a><span className="rightSide">10,078</span></Link>
									</li>
									<li><Link to={`/repo/Java`} className="noUnderline1">
										<a>Java</a><span className="rightSide">9,885</span></Link>
									</li>
									<li><Link to={`/repo/JavaScript`} className="noUnderline1">
										<a>JavaScript</a><span className="rightSide">8,526</span></Link>
									</li>
									<li><Link to={`/repo/C`} className="noUnderline1">
										<a>C</a><span className="rightSide">7,676</span></Link>
									</li>
									<li><Link to={`/repo/C++`} className="noUnderline1">
										<a>C++</a><span className="rightSide">5,637</span></Link>
									</li>
									<li><Link to={`/repo/Go`} className="noUnderline1">
										<a>Go</a><span className="rightSide">3,582</span></Link>
									</li>
									<li><Link to={`/repo/Ruby`} className="noUnderline1">
										<a>Ruby</a><span className="rightSide">3,578</span></Link>
									</li>
									<li><Link to={`/repo/PHP`} className="noUnderline1">
										<a>PHP</a><span className="rightSide">3,449</span></Link>
									</li>
									<li><Link to={`/repo/HTML`} className="noUnderline1">
										<a>HTML</a><span className="rightSide">3,052</span></Link>
									</li>
									<li><Link to={`/repo/C#`} className="noUnderline1">
										<a>C#</a><span className="rightSide">2,916</span></Link>
									</li>
								</ul>

							</div>
						</div>
				</div>
			</div>
			:
			<Loader />}
			
		</div>
			)
		
	}
}