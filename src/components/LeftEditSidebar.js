import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { addExpense, startAddExpense } from '../actions/expenses';
import { startAddMainFill } from '../actions/mainFill';
import {AddExpensePage} from "./AddExpensePage";

class LeftEditSidebar extends React.Component {
    state = {
        toggleLeftSidebar: true
    };

    openFullLeftSidebar = () => {
        this.setState(() => ({toggleLeftSidebar: false}))
    };
    closeFullLeftSidebar = () => {
        this.setState(() => ({toggleLeftSidebar: true}))
    };
    render() {
        return (
            <div>
                <div className="vjc vjf vle">

                    <div className="vlf">
                        <ul>
                            <li data-mrv-tooltip="Pages" className="vlg vfp"><span className="oi" data-glyph="file"></span></li>
                            <li data-mrv-tooltip="Page Content" className="vlh vhr"><span className="oi" data-glyph="layers"></span></li>
                            <li data-mrv-tooltip="Style" className="vlj"><span className="oi" data-glyph="brush"></span></li>
                            <li data-mrv-tooltip="Metadata" className="vpo"><span className="oi" data-glyph="browser"></span></li>
                        </ul>

                        <div className="vll">

                            <div title="Variant Settings" className="vlm">
                                <span className="oi" data-glyph="cog"></span>
                            </div>

                            <div title="Lock Sidebar" className="vgw vhq">
                                <span className="oi" data-glyph="lock-unlocked"></span>
                            </div>
                        </div>

                    </div>

                    <div className={ `vkm ${this.state.toggleLeftSidebar ? '' : 'vjz'}` }
                         onMouseEnter={this.openFullLeftSidebar}
                         onMouseLeave={this.closeFullLeftSidebar}
                    >
                        <div className="vgx">

                            <div className="vlo vlp">

                                <div className="vlq">
                                    <span>Variant Pages</span>
                                </div>

                                <div className="vhs vgc vqg">Save Page As</div>
                                <div className="vhs ved">Import</div>
                                <input type="file" className="vef" name="vef[]" />

                                <div className="vmd">
                                    <div className="vfw empty-vfw">

                                    </div>

                                </div>

                                <div className="vhs vpt" title="New Page"></div>

                                <div className="vls">

                                    <div className="vlt vqg">
                                        <span>Export</span><span className="oi" data-glyph="caret-bottom"></span>
                                        <div className="vlu">
                                            <div className="vah vhs vaj vil vqg">.html</div>
                                            <div className="vdi vhs vaj vix vqg">.variant</div>
                                        </div>
                                    </div>

                                </div>

                            </div>

                            <div className="vlv vlp vhr">

                                <div className="vlq">
                                    <span className="vcr">Page Content</span>
                                </div>

                                <div className="vmd">

                                    <div className="vho">
                                        <span className="vly oi" data-glyph="compass">
                                            <button onClick={() => this.props.startAddMainFill({ type: 'nav-1' })}>
                                                Add a navigation
                                            </button>
                                        </span>
                                        <ul className="vfj">

                                        </ul>
                                        <ul className="vfn">
                                            <li className="vfo">No Nav</li>
                                        </ul>
                                    </div>


                                    <div className="vho">
                                        <span className="vly oi" data-glyph="expand-down">
                                            <button onClick={() => this.props.startAddMainFill({ type: 'dat-1' })}>
                                                Add a body element
                                            </button>
                                        </span>
                                        <ul className="vdm">

                                        </ul>
                                        <ul className="vfk">
                                            <li className="vfl">No Footer</li>
                                        </ul>
                                    </div>

                                    <div className="vho">
                                        <span className="vly oi" data-glyph="expand-down">
                                            <button onClick={() => this.props.startAddMainFill({ type: 'gal-1' })}>
                                                Add a Photo gallery element
                                            </button>

                                        </span>
                                        <ul className="vdm">

                                        </ul>
                                        <ul className="vfk">
                                            <li className="vfl">No Footer</li>
                                        </ul>
                                    </div>

                                    <div className="vem empty-vem">
                                    </div>

                                    <div className="vac">
                                        <span></span>
                                    </div>

                                </div>

                                <div className="vgr">
                                    <span className="vhq">SHOW</span>
                                    <span className="oi" data-glyph="trash"></span>
                                </div>

                                <div className="vad">


                                    <div className="vgt">

                                        <div className="vlz">
                                            <div className="vma">
                                                <span>Filter</span>
                                            </div>

                                            <div className="vgi">
                                                <div className="vgh vhr" vbp="*">
                                                    Show All
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="vgm">
                                    </div>


                                </div>

                                <div className="vls">

                                    <div className="vdq vqg">
                                        <span className="vhq">Get HTML</span>
                                    </div>

                                </div>


                            </div>

                            <div className="vmb vlp">

                                <div className="vlq">
                                    <span>Page Style</span>
                                </div>

                                <div className="vmd vnb empty-vmd">

                                    <div className="vho vmu vih">
                                        <span className="vly oi" data-glyph="droplet">Colour Scheme</span>
                                        <ul className="vay">

                                        </ul>
                                    </div>

                                    <div className="vho vmy vih">
                                        <span className="vly vmz oi" data-glyph="text">Typography</span>
                                        <ul className="vms">

                                        </ul>
                                    </div>

                                </div>

                                <div className="vls">

                                    <div className="vdq vqg">
                                        <span className="vhq">Get HTML</span>
                                    </div>

                                </div>


                            </div>


                            <div className="vpn vlp">

                                <div className="vlq">
                                    <span>Page Metadata</span>
                                </div>


                                <div className="vmd">

                                    <div className="vlw">
                                        <label>Title Tag:</label>
                                        <input type="text" className="vei vlx" />
                                    </div>

                                    <div className="vlw">
                                        <label>Page Description (SEO):</label>
                                        <input type="text" className="vpp" />
                                    </div>

                                    <div className="vlw">
                                        <label>Google Analytics ID:</label>
                                        <input type="text" className="vpq" />
                                    </div>

                                </div>


                                <div className="vls">
                                    <div className="vdq vqg">
                                        <span className="vhq">Get HTML</span>
                                    </div>
                                </div>


                            </div>

                        </div>
                    </div>


                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    startAddMainFill: (container) => dispatch(startAddMainFill(container))
});

export default connect(undefined, mapDispatchToProps)(LeftEditSidebar);