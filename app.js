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

    // Scenario tab switching
    document.querySelectorAll('.scenario-tabs').forEach(group => {
        const btns = group.querySelectorAll('.tab-btn');
        const panels = group.querySelectorAll('.tab-panel');
        btns.forEach(btn => {
            btn.addEventListener('click', () => {
                const key = btn.getAttribute('data-tab');
                btns.forEach(b => b.classList.toggle('is-active', b === btn));
                panels.forEach(p => p.classList.toggle('is-active', p.getAttribute('data-panel') === key));
            });
        });
    });
});
