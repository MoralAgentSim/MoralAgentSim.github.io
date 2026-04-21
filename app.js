// Minimal: smooth anchor scroll. The page is intentionally static.
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href').slice(1);
            if (!targetId) return;
            const el = document.getElementById(targetId);
            if (!el) return;
            e.preventDefault();
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            history.replaceState(null, '', `#${targetId}`);
        });
    });
});
