import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Results } from './Results';

export const Router = () => {
    return (
        <div className='p-4'>
            <Routes>
                <Route exact path="/" render={() => <Navigate to='/search' />} />
                <Route exact path={['/search', '/images', '/news', '/videos']} element={<Results />} />
            </Routes>
        </div>
    )
}