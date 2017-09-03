import React,{Component} from 'react'
import {inject,observer} from 'mobx-react'
import '../css/home.css'
import {Link,Route} from 'react-router-dom';

const langs = ["JavaScript", "Java", "Python", "PHP", "Ruby","Swift","Go","Julia","TypeScript","Rust","scala","Kotlin"]

@observer
export default class Home extends Component{
	
	
	render(){
		return(
			<div className="p-container">
				<div className="home-header">
					<h2>TechScan-Source Code Version Control Info Domain of CAST Software</h2>
					<p>Browse TechScan Technologies</p>
				</div>
				<div className="home-flex">
				<ul className="explore-home">
				{langs.map((lang,index) => 
				
				<li className="explore-lang" key={index}>
				<Link className="linkk" to={`/repo/${lang}`}>
				<a className="lang-name lang-text">
				{lang}
				</a>
				</Link>
				</li>
				)}
				</ul>
				<div className="one-fourth">
							<div className="lang-header">
								<h2>Languages</h2>
								<ul className="filter-list">
									<li><Link to={`/repo/Python`} className="noUnderline">
										<a>Python</a><span className="rightSide">10,078</span></Link>
									</li>
									<li><Link to={`/repo/Java`} className="noUnderline">
										<a>Java</a><span className="rightSide">9,885</span></Link>
									</li>
									<li><Link to={`/repo/JavaScript`} className="noUnderline">
										<a>JavaScript</a><span className="rightSide">8,526</span></Link>
									</li>
									<li><Link to={`/repo/C`} className="noUnderline">
										<a>C</a><span className="rightSide">7,676</span></Link>
									</li>
									<li><Link to={`/repo/C++`} className="noUnderline">
										<a>C++</a><span className="rightSide">5,637</span></Link>
									</li>
									<li><Link to={`/repo/Go`} className="noUnderline">
										<a>Go</a><span className="rightSide">3,582</span></Link>
									</li>
									<li><Link to={`/repo/Ruby`} className="noUnderline">
										<a>Ruby</a><span className="rightSide">3,578</span></Link>
									</li>
									<li><Link to={`/repo/PHP`} className="noUnderline">
										<a>PHP</a><span className="rightSide">3,449</span></Link>
									</li>
									<li><Link to={`/repo/HTML`} className="noUnderline">
										<a>HTML</a><span className="rightSide">3,052</span></Link>
									</li>
									<li><Link to={`/repo/C#`} className="noUnderline">
										<a>C#</a><span className="rightSide">2,916</span></Link>
									</li>
								</ul>

							</div>
						</div>
						</div>
			
		</div>
			)
		
	}
}