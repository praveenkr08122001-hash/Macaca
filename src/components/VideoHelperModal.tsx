import React, { useState } from 'react';
import { X, Video, UploadCloud, Folder, Link, FileVideo } from 'lucide-react';

interface VideoHelperModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VideoHelperModal: React.FC<VideoHelperModalProps> = ({ isOpen, onClose }) => {
  const [localVideoSrc, setLocalVideoSrc] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setLocalVideoSrc(url);
    }
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px',
        background: 'rgba(0, 0, 0, 0.8)',
        backdropFilter: 'blur(10px)',
      }}
      onClick={onClose}
    >
      <div
        className="glass-panel"
        style={{
          width: '100%',
          maxWidth: '680px',
          maxHeight: '90vh',
          overflowY: 'auto',
          padding: '36px',
          background: 'rgba(15, 17, 28, 0.98)',
          border: '1px solid rgba(56, 189, 248, 0.4)',
          boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.9), 0 0 40px rgba(6, 182, 212, 0.25)',
          position: 'relative',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'none',
            border: 'none',
            color: '#94a3b8',
            cursor: 'pointer',
            padding: '6px',
          }}
        >
          <X size={20} />
        </button>

        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
          <div
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '10px',
              background: 'rgba(56, 189, 248, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Video size={20} color="#38bdf8" />
          </div>
          <div>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#f8fafc', margin: 0 }}>
              How to Send Your Animation Video / Reference
            </h3>
            <p style={{ fontSize: '0.8rem', color: '#94a3b8', margin: 0 }}>
              உங்களுடைய அனிமேஷன் வீடியோவை பகிர்ந்து கொள்ள வழிகாட்டல்
            </p>
          </div>
        </div>

        {/* 3 Simple Methods */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', margin: '24px 0' }}>
          
          {/* Method 1: Folder copy */}
          <div
            style={{
              padding: '16px 20px',
              borderRadius: '14px',
              background: 'rgba(56, 189, 248, 0.05)',
              border: '1px solid rgba(56, 189, 248, 0.2)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
              <Folder size={18} color="#38bdf8" />
              <span style={{ fontSize: '0.95rem', fontWeight: 700, color: '#f8fafc' }}>
                Method 1 (Direct & Instant): Place file into project folder
              </span>
            </div>
            <p style={{ fontSize: '0.85rem', color: '#94a3b8', lineHeight: 1.5, margin: 0 }}>
              Copy your video file (e.g. <code style={{ color: '#38bdf8' }}>animation.mp4</code>) directly into:<br />
              <strong style={{ color: '#f8fafc', fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>
                D:\Macaca\public\
              </strong><br />
              Once placed there, I will automatically detect and embed or sync the CSS keyframes with it!
            </p>
          </div>

          {/* Method 2: Drag & drop / chat upload */}
          <div
            style={{
              padding: '16px 20px',
              borderRadius: '14px',
              background: 'rgba(168, 85, 247, 0.05)',
              border: '1px solid rgba(168, 85, 247, 0.2)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
              <UploadCloud size={18} color="#a855f7" />
              <span style={{ fontSize: '0.95rem', fontWeight: 700, color: '#f8fafc' }}>
                Method 2: Attach or Drop in Chat
              </span>
            </div>
            <p style={{ fontSize: '0.85rem', color: '#94a3b8', lineHeight: 1.5, margin: 0 }}>
              Drag and drop your video file directly into this chat prompt. I can inspect the visual flow, transitions, timing, and effects!
            </p>
          </div>

          {/* Method 3: Cloud link */}
          <div
            style={{
              padding: '16px 20px',
              borderRadius: '14px',
              background: 'rgba(16, 185, 129, 0.05)',
              border: '1px solid rgba(16, 185, 129, 0.2)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
              <Link size={18} color="#10b981" />
              <span style={{ fontSize: '0.95rem', fontWeight: 700, color: '#f8fafc' }}>
                Method 3: Share a Cloud Link (Google Drive / Loom / YouTube)
              </span>
            </div>
            <p style={{ fontSize: '0.85rem', color: '#94a3b8', lineHeight: 1.5, margin: 0 }}>
              You can upload your video to Google Drive, Dropbox, Loom, or YouTube and paste the link here.
            </p>
          </div>

        </div>

        {/* Live In-App Video Previewer */}
        <div
          style={{
            padding: '20px',
            background: 'rgba(0, 0, 0, 0.4)',
            borderRadius: '16px',
            border: '1px dashed rgba(255, 255, 255, 0.15)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
            <span style={{ fontSize: '0.9rem', fontWeight: 700, color: '#f8fafc' }}>
              Test & Preview Your Video Right Now:
            </span>
            <label
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '6px 14px',
                borderRadius: '8px',
                background: '#38bdf8',
                color: '#000000',
                fontSize: '0.8rem',
                fontWeight: 700,
                cursor: 'pointer',
              }}
            >
              <FileVideo size={14} />
              <span>Select Video File</span>
              <input type="file" accept="video/*" onChange={handleFileChange} style={{ display: 'none' }} />
            </label>
          </div>

          {localVideoSrc ? (
            <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(56, 189, 248, 0.3)' }}>
              <video
                src={localVideoSrc}
                controls
                autoPlay
                loop
                style={{ width: '100%', maxHeight: '280px', display: 'block', background: '#000' }}
              />
            </div>
          ) : (
            <div style={{ textAlign: 'center', padding: '24px', color: '#64748b', fontSize: '0.85rem' }}>
              No video selected yet. Select an MP4 or WebM file above to preview how it looks inside Macaca AI!
            </div>
          )}
        </div>

        <button
          onClick={onClose}
          className="btn-primary"
          style={{ width: '100%', marginTop: '20px', padding: '12px' }}
        >
          <span>Got it! Back to Landing Page</span>
        </button>

      </div>
    </div>
  );
};
