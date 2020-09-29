import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './styles.css';

const Breadcrumbs = props => {
    const { history, location } = props;
    const { pathname } = location;
    const pathnames = pathname.split('/').filter(x => x);

    return (
        <div className='bread'>
            <Link onClick={() => history.push('/dashboard')}>Home</Link>
            {pathnames.map((name, index) => {
                const routeTo = `${pathnames.slice(0, index + 1).join('/')}`;
                const isLast = index === pathnames.length - 1;
                return isLast ? <p>{name}</p> : <Link key={name} onClick={() => history.push(routeTo)}>{name}</Link> ;
            })}
        </div>
    )
};

export default withRouter(Breadcrumbs);