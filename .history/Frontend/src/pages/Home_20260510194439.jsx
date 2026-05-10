import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../utils/axios';
import { FaCalendarAlt, FaMapMarkerAlt, FaSearch, FaRegClock, FaTicketAlt, FaShieldAlt } from 'react-icons/fa';

const Home = () => {
    const [events, setEvents] = useState([]);
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            fetchEvents();
        }, 400); // 400ms debounce
        return () => clearTimeout(timeoutId);
    }, [search]);

    const fetchEvents = async () => {
        try {
            const { data } = await api.get(`/events?search=${search}`);
            setEvents(data);
        } catch (error) {
            console.error('Error fetching events:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <div className="relative mb-12 overflow-hidden text-white bg-black shadow-2xl rounded-3xl">
                <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=3000&auto=format&fit=crop')] bg-cover bg-center"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
                <div className="relative z-10 flex flex-col items-center p-10 text-center md:p-20">
                    <span className="bg-white/20 text-white backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6 border border-white/20">Welcome to Eventora</span>
                    <h1 className="mb-6 text-5xl font-black leading-tight tracking-tight md:text-7xl drop-shadow-lg">
                        Find Your Next <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500">Unforgettable</span> Experience
                    </h1>
                    <p className="max-w-2xl mx-auto mb-10 text-lg font-light leading-relaxed text-gray-300 md:text-xl">
                        Explore curated events, inspiring conferences, and unforgettable live experiences — all in one place.
                    </p>

                    <div className="relative flex items-center w-full max-w-2xl mx-auto shadow-2xl group">
                        <FaSearch className="absolute text-xl text-gray-500 transition-colors left-6 group-focus-within:text-black" />
                        <input
                            type="text"
                            placeholder="Search events by title..."
                            className="w-full py-5 pl-16 pr-6 text-lg font-medium text-black placeholder-gray-400 transition-all border-2 border-transparent rounded-full bg-white/95 backdrop-blur-sm focus:border-gray-500 focus:outline-none"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>
                </div>
            </div>

            {/* Why Choose Us / Features row */}
            <div className="grid grid-cols-1 gap-8 px-4 mb-16 md:grid-cols-3">
                <div className="flex flex-col items-center p-8 text-center transition duration-300 bg-white border border-gray-100 shadow-sm rounded-2xl hover:-translate-y-1">
                    <div className="flex items-center justify-center w-16 h-16 mb-6 text-2xl text-white bg-gray-900 shadow-md rounded-2xl shadow-gray-200/50">
                        <FaRegClock />
                    </div>
                    <h3 className="mb-3 text-xl font-bold text-gray-900">Fast Booking</h3>
                    <p className="text-sm leading-relaxed text-gray-500"></p>
                </div>
                <div className="flex flex-col items-center p-8 text-center transition duration-300 bg-white border border-gray-100 shadow-sm rounded-2xl hover:-translate-y-1">
                    <div className="flex items-center justify-center w-16 h-16 mb-6 text-2xl text-white bg-gray-900 shadow-md rounded-2xl shadow-gray-200/50">
                        <FaTicketAlt />
                    </div>
                    <h3 className="mb-3 text-xl font-bold text-gray-900">Seamless Access</h3>
                    <p className="text-sm leading-relaxed text-gray-500">Download tickets instantly or manage them right from your personal dashboard with easily.</p>
                </div>
                <div className="flex flex-col items-center p-8 text-center transition duration-300 bg-white border border-gray-100 shadow-sm rounded-2xl hover:-translate-y-1">
                    <div className="flex items-center justify-center w-16 h-16 mb-6 text-2xl text-white bg-gray-900 shadow-md rounded-2xl shadow-gray-200/50">
                        <FaShieldAlt />
                    </div>
                    <h3 className="mb-3 text-xl font-bold text-gray-900">Secure Platform</h3>
                    <p className="text-sm leading-relaxed text-gray-500">All transactions and registrations are bounded by cutting-edge security and 2FA OTP tech.</p>
                </div>
            </div>

            <div className="flex items-center justify-between px-2 pb-4 mb-8 border-b border-gray-200">
                <h2 className="text-3xl font-extrabold text-gray-900">Upcoming Events</h2>
                <div className="font-medium text-gray-500">{events.length} results found</div>
            </div>

            {loading ? (
                <div className="py-20 text-xl font-semibold text-center text-gray-600">Loading events...</div>
            ) : events.length === 0 ? (
                <div className="py-20 text-xl text-center text-gray-500">No events found matching your search.</div>
            ) : (
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {events.map(event => (
                        <div key={event._id} className="flex flex-col overflow-hidden transition bg-white shadow-md rounded-xl hover:shadow-xl">
                            <div className="relative h-48 overflow-hidden bg-gray-200">
                                {event.image ? (
                                    <img src={event.image} alt={event.title} className="object-cover w-full h-full" />
                                ) : (
                                    <div className="flex items-center justify-center w-full h-full text-2xl font-bold text-gray-600 bg-gray-200">
                                        {event.category || 'Event'}
                                    </div>
                                )}
                                <div className="absolute px-3 py-1 text-sm font-bold rounded-full shadow-sm top-4 right-4 bg-white/90 backdrop-blur-sm">
                                    {event.ticketPrice === 0 ? <span className="text-green-600">FREE</span> : <span className="text-gray-900">₹{event.ticketPrice}</span>}
                                </div>
                            </div>
                            <div className="flex flex-col flex-grow p-6">
                                <div className="mb-2 text-xs font-bold tracking-wider text-gray-700 uppercase">{event.category}</div>
                                <h2 className="mb-3 text-xl font-bold text-gray-800">{event.title}</h2>
                                <div className="flex flex-col gap-2 mb-4 text-sm text-gray-600">
                                    <div className="flex items-center gap-2">
                                        <FaCalendarAlt className="text-gray-400" />
                                        <span>{new Date(event.date).toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <FaMapMarkerAlt className="text-gray-400" />
                                        <span>{event.location}</span>
                                    </div>
                                </div>
                                <div className="mt-auto">
                                    <div className="w-full h-2 mb-2 bg-gray-200 rounded-full">
                                        <div className="h-2 bg-gray-700 rounded-full" style={{ width: `${(event.availableSeats / event.totalSeats) * 100}%` }}></div>
                                    </div>
                                    <p className="mb-4 text-xs text-gray-500">{event.availableSeats} of {event.totalSeats} seats remaining</p>
                                    <Link to={`/events/${event._id}`} className="block w-full py-2 font-semibold text-center text-gray-900 transition bg-gray-100 rounded-lg hover:bg-gray-200">
                                        View Details
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Footer Section */}
            <footer className="pt-16 pb-8 mt-auto text-center border-t border-gray-200">
                <div className="flex items-center justify-center gap-2 mb-4">
                    <FaTicketAlt className="text-2xl text-gray-800" />
                    <span className="text-xl font-bold text-gray-900">Eventora</span>
                </div>
                <p className="max-w-md mx-auto mb-6 text-sm text-gray-500">
                    The simplest, most dynamic way to manage, discover, and host world-class events in your local city. Let's make memories together.
                </p>
                <div className="text-xs font-medium tracking-wider text-gray-400 uppercase">
                    &copy; {new Date().getFullYear()} Eventora Platform. All rights reserved.
                </div>
            </footer>
        </div>
    );
};

export default Home;
