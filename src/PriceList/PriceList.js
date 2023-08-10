import React from 'react';
import './PriceList.css'; 

import Swal from 'sweetalert2';

const handleSendClick = () => {
    Swal.fire({
      icon: 'success',
      title: 'Thanks for by movie',
      
    })
  };

const PriceList = () => {
  return (
    <div className="ContainerPrice">
        <div className="price-list">
            <h1 className='name-title'>NetFlix</h1>
            <div className="BlockLarge">
                <div className="BlockSmall">
                    <div className="Bundle">
                        <div className="Title">
                            <span>1 month plan</span>
                        </div>
                        <div className="price">
                            <span>1,25$</span>
                        </div>
                        <div className="TitleSmall">
                            <div >
                                <p className="">Standard 4K image quality</p>
                            </div>
                            <div >
                                <p>No ads</p>
                            </div>
                            <div >
                                <p>Say No to Trial Account</p>
                            </div>
                            <div >
                                <p>full-time warranty</p>
                            </div>
                            <div >
                                <p>Optimum usage time</p>
                            </div>
                        </div>
                        <div className="button" onClick={handleSendClick}>
                            <button type="submit" className='btn-buton'>
                                buy now
                            </button>
                        </div>
                    </div>
                    <div className="Bundle">
                    <div className="Title">
                        <span>3 month plan</span>
                        </div>
                        <div className="price">
                            <span>3,25$</span>
                        </div>
                        <div className="TitleSmall">
                            <div >
                                <p>Standard 4K image quality</p>
                            </div>
                            <div >
                                <p>No ads</p>
                            </div>
                            <div >
                                <p>Say No to Trial Account</p>
                            </div>
                            <div >
                                <p>full-time warranty</p>
                            </div>
                            <div >
                                <p>Optimum usage time</p>
                            </div>
                        </div>
                        <div className="button" onClick={handleSendClick}>
                            <button type="submit" className='btn-buton'>
                                buy now
                            </button>
                        </div>
                    </div>
                    <div className="Bundle">
                    <div className="Title">
                        <span>6 month plan</span>
                        </div>
                        <div className="price">
                            <span>5,25$</span>
                        </div>
                        <div className="TitleSmall">
                            <div >
                                <p>Standard 4K image quality</p>
                            </div>
                            <div >
                                <p>No ads</p>
                            </div>
                            <div >
                                <p>Say No to Trial Account</p>
                            </div>
                            <div >
                                <p>full-time warranty</p>
                            </div>
                            <div >
                                <p>Optimum usage time</p>
                            </div>
                        </div>
                        <div className="button" onClick={handleSendClick}>
                            <button type="submit" className='btn-buton'>
                                buy now
                            </button>
                        </div>
                    </div>
                    <div className="Bundle">
                    <div className="Title">
                        <span>1 year plan</span>
                        </div>
                        <div className="price">
                            <span>8,25$</span>
                        </div>
                        <div className="TitleSmall">
                            <div >
                                <p>Standard 4K image quality</p>
                            </div>
                            <div >
                                <p>No ads</p>
                            </div>
                            <div >
                                <p>Say No to Trial Account</p>
                            </div>
                            <div >
                                <p>full-time warranty</p>
                            </div>
                            <div >
                                <p>Optimum usage time</p>
                            </div>
                        </div>
                        <div className="button" onClick={handleSendClick}>
                            <button type="submit" className='btn-buton'>
                                buy now
                            </button>
                        </div>
                    </div>
                    
                </div>
            </div>
            </div>

            {/* hbo */}

            <div className="price-list">
            <h1 className='name-title'>Hbomax</h1>
            <div className="BlockLarge">
                <div className="BlockSmall">
                    <div className="Bundle">
                        <div className="Title">
                            <span>1 month plan</span>
                        </div>
                        <div className="price">
                            <span>1,25$</span>
                        </div>
                        <div className="TitleSmall">
                            <div >
                                <p>Standard 4K image quality</p>
                            </div>
                            <div >
                                <p>No ads</p>
                            </div>
                            <div >
                                <p>Say No to Trial Account</p>
                            </div>
                            <div >
                                <p>full-time warranty</p>
                            </div>
                            <div >
                                <p>Optimum usage time</p>
                            </div>
                        </div>
                        <div className="button" onClick={handleSendClick}>
                            <button type="submit" className='btn-buton'>
                                buy now
                            </button>
                        </div>
                    </div>
                    <div className="Bundle">
                    <div className="Title">
                        <span>3 month plan</span>
                        </div>
                        <div className="price">
                            <span>3,25$</span>
                        </div>
                        <div className="TitleSmall">
                            <div >
                                <p>Standard 4K image quality</p>
                            </div>
                            <div >
                                <p>No ads</p>
                            </div>
                            <div >
                                <p>Say No to Trial Account</p>
                            </div>
                            <div >
                                <p>full-time warranty</p>
                            </div>
                            <div >
                                <p>Optimum usage time</p>
                            </div>
                        </div>
                        <div className="button" onClick={handleSendClick}>
                            <button type="submit" className='btn-buton'>
                                buy now
                            </button>
                        </div>
                    </div>
                    <div className="Bundle">
                    <div className="Title">
                        <span>6 month plan</span>
                        </div>
                        <div className="price">
                            <span>5,25$</span>
                        </div>
                        <div className="TitleSmall">
                            <div >
                                <p>Standard 4K image quality</p>
                            </div>
                            <div >
                                <p>No ads</p>
                            </div>
                            <div >
                                <p>Say No to Trial Account</p>
                            </div>
                            <div >
                                <p>full-time warranty</p>
                            </div>
                            <div >
                                <p>Optimum usage time</p>
                            </div>
                        </div>
                        <div className="button" onClick={handleSendClick}>
                            <button type="submit" className='btn-buton'>
                                buy now
                            </button>
                        </div>
                    </div>
                    <div className="Bundle">
                    <div className="Title">
                        <span>1 year plan</span>
                        </div>
                        <div className="price">
                            <span>8,25$</span>
                        </div>
                        <div className="TitleSmall">
                            <div >
                                <p>Standard 4K image quality</p>
                            </div>
                            <div >
                                <p>No ads</p>
                            </div>
                            <div >
                                <p>Say No to Trial Account</p>
                            </div>
                            <div >
                                <p>full-time warranty</p>
                            </div>
                            <div >
                                <p>Optimum usage time</p>
                            </div>
                        </div>
                        <div className="button" onClick={handleSendClick}>
                            <button type="submit" className='btn-buton'>
                                buy now
                            </button>
                        </div>
                    </div>
                    
                </div>
            </div>
            </div>

                {/* disney */}

            <div className="price-list">
            <h1 className='name-title'>Disney</h1>
            <div className="BlockLarge">
                <div className="BlockSmall">
                    <div className="Bundle">
                        <div className="Title">
                            <span>1 month plan</span>
                        </div>
                        <div className="price">
                            <span>1,25$</span>
                        </div>
                        <div className="TitleSmall">
                            <div >
                                <p>Standard 4K image quality</p>
                            </div>
                            <div >
                                <p>No ads</p>
                            </div>
                            <div >
                                <p>Say No to Trial Account</p>
                            </div>
                            <div >
                                <p>full-time warranty</p>
                            </div>
                            <div >
                                <p>Optimum usage time</p>
                            </div>
                        </div>
                        <div className="button" onClick={handleSendClick}>
                            <button type="submit" className='btn-buton'>
                                buy now
                            </button>
                        </div>
                    </div>
                    <div className="Bundle">
                    <div className="Title">
                        <span>3 month plan</span>
                        </div>
                        <div className="price">
                            <span>3,25$</span>
                        </div>
                        <div className="TitleSmall">
                            <div >
                                <p>Standard 4K image quality</p>
                            </div>
                            <div >
                                <p>No ads</p>
                            </div>
                            <div >
                                <p>Say No to Trial Account</p>
                            </div>
                            <div >
                                <p>full-time warranty</p>
                            </div>
                            <div >
                                <p>Optimum usage time</p>
                            </div>
                        </div>
                        <div className="button" onClick={handleSendClick}>
                            <button type="submit" className='btn-buton'>
                                buy now
                            </button>
                        </div>
                    </div>
                    <div className="Bundle">
                    <div className="Title">
                        <span>6 month plan</span>
                        </div>
                        <div className="price">
                            <span>5,25$</span>
                        </div>
                        <div className="TitleSmall">
                            <div >
                                <p>Standard 4K image quality</p>
                            </div>
                            <div >
                                <p>No ads</p>
                            </div>
                            <div >
                                <p>Say No to Trial Account</p>
                            </div>
                            <div >
                                <p>full-time warranty</p>
                            </div>
                            <div >
                                <p>Optimum usage time</p>
                            </div>
                        </div>
                        <div className="button" onClick={handleSendClick}>
                            <button type="submit" className='btn-buton'>
                                buy now
                            </button>
                        </div>
                    </div>
                    <div className="Bundle">
                    <div className="Title">
                        <span>1 year plan</span>
                        </div>
                        <div className="price">
                            <span>8,25$</span>
                        </div>
                        <div className="TitleSmall">
                            <div >
                                <p>Standard 4K image quality</p>
                            </div>
                            <div >
                                <p>No ads</p>
                            </div>
                            <div >
                                <p>Say No to Trial Account</p>
                            </div>
                            <div >
                                <p>full-time warranty</p>
                            </div>
                            <div >
                                <p>Optimum usage time</p>
                            </div>
                        </div>
                        <div className="button" onClick={handleSendClick}>
                            <button type="submit" className='btn-buton'>
                                buy now
                            </button>
                        </div>
                    </div>
                    
                </div>
            </div>
            </div>
    </div>
  );
};

export default PriceList;
