import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function AdminDashboard() {
  const [enquiries, setEnquiries] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('srr_enquiries') || '[]');
    setEnquiries(data);
  }, []);

  const updateStatus = (id, newStatus) => {
    const updatedEnquiries = enquiries.map(eq => 
      eq.id === id ? { ...eq, status: newStatus } : eq
    );
    setEnquiries(updatedEnquiries);
    localStorage.setItem('srr_enquiries', JSON.stringify(updatedEnquiries));
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Pending': return 'bg-error-container text-on-error-container';
      case 'Contacted': return 'bg-primary-container text-on-primary-container';
      case 'Closed': return 'bg-surface-variant text-on-surface-variant';
      default: return 'bg-surface-variant text-on-surface-variant';
    }
  };

  const pendingCount = enquiries.filter(e => e.status === 'Pending').length;
  const contactedCount = enquiries.filter(e => e.status === 'Contacted').length;

  const handleLogout = () => {
    localStorage.removeItem('srr_admin_auth');
    navigate('/admin');
  };

  return (
    <div className="bg-surface-container-low min-h-screen text-on-surface font-body-md">
      {/* Header */}
      <header className="bg-surface border-b border-outline-variant py-4 px-6 sticky top-0 z-10 flex justify-between items-center shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary-container rounded-lg flex items-center justify-center">
            <i className="ph-fill ph-shield-check text-primary text-xl"></i>
          </div>
          <div>
            <h1 className="font-title-lg text-title-lg font-bold">SRR Wholesale Admin</h1>
            <p className="font-caption text-caption text-on-surface-variant">B2B Portal Dashboard</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <a href="/" className="text-on-surface-variant hover:text-primary transition-colors font-label-md flex items-center gap-2">
            <i className="ph ph-globe"></i> Website
          </a>
          <button 
            onClick={handleLogout}
            className="text-error hover:text-error-container transition-colors font-label-md flex items-center gap-2"
          >
            <i className="ph ph-sign-out"></i> Logout
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8 space-y-8">
        
        {/* Metrics Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay:0.1}} className="bg-surface p-6 rounded-2xl border border-outline-variant shadow-sm flex items-center justify-between">
            <div>
              <p className="font-label-md text-on-surface-variant uppercase tracking-wider mb-1">Total Enquiries</p>
              <h2 className="font-display-sm text-display-sm font-bold">{enquiries.length}</h2>
            </div>
            <div className="w-12 h-12 bg-surface-container-high rounded-full flex items-center justify-center text-primary text-2xl">
              <i className="ph ph-users"></i>
            </div>
          </motion.div>
          <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay:0.2}} className="bg-surface p-6 rounded-2xl border border-outline-variant shadow-sm flex items-center justify-between">
            <div>
              <p className="font-label-md text-error uppercase tracking-wider mb-1">Pending Action</p>
              <h2 className="font-display-sm text-display-sm font-bold">{pendingCount}</h2>
            </div>
            <div className="w-12 h-12 bg-error-container rounded-full flex items-center justify-center text-on-error-container text-2xl">
              <i className="ph ph-clock"></i>
            </div>
          </motion.div>
          <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay:0.3}} className="bg-surface p-6 rounded-2xl border border-outline-variant shadow-sm flex items-center justify-between">
            <div>
              <p className="font-label-md text-primary uppercase tracking-wider mb-1">Contacted</p>
              <h2 className="font-display-sm text-display-sm font-bold">{contactedCount}</h2>
            </div>
            <div className="w-12 h-12 bg-primary-container rounded-full flex items-center justify-center text-on-primary-container text-2xl">
              <i className="ph ph-phone-call"></i>
            </div>
          </motion.div>
        </div>

        {/* Data Table */}
        <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay:0.4}} className="bg-surface border border-outline-variant rounded-2xl overflow-hidden shadow-sm">
          <div className="p-6 border-b border-outline-variant flex justify-between items-center bg-surface">
            <h2 className="font-title-lg text-title-lg font-bold">Recent Customer Updates</h2>
            <button className="text-on-surface-variant hover:text-primary transition-colors" onClick={() => window.location.reload()}>
              <i className="ph ph-arrows-clockwise text-xl"></i>
            </button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-container-lowest text-on-surface-variant font-label-md border-b border-outline-variant">
                  <th className="p-4 font-semibold">Date</th>
                  <th className="p-4 font-semibold">Business Details</th>
                  <th className="p-4 font-semibold">Product Interest</th>
                  <th className="p-4 font-semibold">Vol. Req.</th>
                  <th className="p-4 font-semibold">Status</th>
                  <th className="p-4 font-semibold text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant">
                {enquiries.length === 0 ? (
                  <tr>
                    <td colSpan="6" className="p-8 text-center text-on-surface-variant">
                      No enquiries yet. Submit one from the landing page!
                    </td>
                  </tr>
                ) : (
                  enquiries.map((eq) => (
                    <tr key={eq.id} className="hover:bg-surface-container-lowest transition-colors">
                      <td className="p-4 align-top">
                        <div className="font-body-sm text-on-surface">
                          {new Date(eq.date).toLocaleDateString()}
                        </div>
                        <div className="text-xs text-on-surface-variant">
                          {new Date(eq.date).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                        </div>
                      </td>
                      <td className="p-4 align-top">
                        <div className="font-title-sm font-bold text-on-surface">{eq.businessName}</div>
                        <div className="text-sm text-on-surface-variant">{eq.contactPerson}</div>
                        <div className="text-sm text-primary flex items-center gap-1 mt-1">
                          <i className="ph-fill ph-phone"></i> {eq.phone}
                        </div>
                        {eq.gst && <div className="text-xs text-on-surface-variant mt-1">GST: {eq.gst}</div>}
                      </td>
                      <td className="p-4 align-top text-sm">
                        {eq.product ? (
                          <span className="inline-block bg-surface-variant px-2 py-1 rounded text-on-surface-variant">{eq.product}</span>
                        ) : '-'}
                      </td>
                      <td className="p-4 align-top text-sm capitalize">
                        {eq.volume}
                      </td>
                      <td className="p-4 align-top">
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(eq.status)}`}>
                          {eq.status}
                        </span>
                      </td>
                      <td className="p-4 align-top text-right">
                        <div className="flex justify-end gap-2">
                          {eq.status === 'Pending' && (
                            <button 
                              onClick={() => updateStatus(eq.id, 'Contacted')}
                              className="px-3 py-1.5 bg-primary text-on-primary text-xs rounded-lg hover:bg-primary-container transition-colors"
                            >
                              Mark Contacted
                            </button>
                          )}
                          {(eq.status === 'Pending' || eq.status === 'Contacted') && (
                            <button 
                              onClick={() => updateStatus(eq.id, 'Closed')}
                              className="px-3 py-1.5 bg-surface border border-outline-variant text-on-surface-variant text-xs rounded-lg hover:bg-surface-container transition-colors"
                            >
                              Close
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </motion.div>

      </main>
    </div>
  );
}
