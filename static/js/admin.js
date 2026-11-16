/**
 * Sports League Admin Control Panel Script
 */

document.addEventListener('DOMContentLoaded', () => {
    initAdminSidebar();
    initModalControls();
    initEditButtons();
    initDeleteConfirmations();
});

/**
 * Mobile Admin Sidebar Toggle
 */
function initAdminSidebar() {
    // Mobile sidebar behaviour is registered once by the accessible handler
    // at the end of this file (with backdrop, Escape and resize support).
}

/**
 * Modal Open/Close Controls
 */
function initModalControls() {
    // Open Buttons
    document.querySelectorAll('[data-open-modal]').forEach(btn => {
        btn.addEventListener('click', () => {
            const modalId = btn.getAttribute('data-open-modal');
            const modal = document.getElementById(modalId);
            if (modal) modal.classList.add('active');
        });
    });

    // Close Buttons
    document.querySelectorAll('[data-close-modal]').forEach(btn => {
        btn.addEventListener('click', () => {
            const modal = btn.closest('.modal-overlay');
            if (modal) modal.classList.remove('active');
        });
    });

    // Close on background click
    document.querySelectorAll('.modal-overlay').forEach(overlay => {
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                overlay.classList.remove('active');
            }
        });
    });
}

/**
 * Auto-populate Edit Modals from data attributes
 */
function initEditButtons() {
    // 1. Edit Team
    document.querySelectorAll('.btn-edit-team').forEach(btn => {
        btn.addEventListener('click', () => {
            const modal = document.getElementById('editTeamModal');
            const form = document.getElementById('editTeamForm');
            if (!modal || !form) return;

            const id = btn.getAttribute('data-id');
            form.action = `/admin/teams/edit/${id}`;

            document.getElementById('edit_team_name').value = btn.getAttribute('data-name') || '';
            document.getElementById('edit_team_short_name').value = btn.getAttribute('data-short-name') || '';
            document.getElementById('edit_team_code').value = btn.getAttribute('data-code') || '';
            document.getElementById('edit_team_coach').value = btn.getAttribute('data-coach') || '';
            document.getElementById('edit_team_founded').value = btn.getAttribute('data-founded') || '';
            document.getElementById('edit_team_venue').value = btn.getAttribute('data-venue-id') || '';
            document.getElementById('edit_team_primary_color').value = btn.getAttribute('data-primary-color') || '#00ff87';
            document.getElementById('edit_team_secondary_color').value = btn.getAttribute('data-secondary-color') || '#0a192f';
            document.getElementById('edit_team_logo_url').value = btn.getAttribute('data-logo-url') || '';
            document.getElementById('edit_team_bio').value = btn.getAttribute('data-bio') || '';

            modal.classList.add('active');
        });
    });

    // 2. Edit Player
    document.querySelectorAll('.btn-edit-player').forEach(btn => {
        btn.addEventListener('click', () => {
            const modal = document.getElementById('editPlayerModal');
            const form = document.getElementById('editPlayerForm');
            if (!modal || !form) return;

            const id = btn.getAttribute('data-id');
            form.action = `/admin/players/edit/${id}`;

            document.getElementById('edit_player_team_id').value = btn.getAttribute('data-team-id') || '';
            document.getElementById('edit_player_name').value = btn.getAttribute('data-name') || '';
            document.getElementById('edit_player_jersey').value = btn.getAttribute('data-jersey') || '';
            document.getElementById('edit_player_position').value = btn.getAttribute('data-position') || '';
            document.getElementById('edit_player_nationality').value = btn.getAttribute('data-nationality') || '';
            document.getElementById('edit_player_photo_url').value = btn.getAttribute('data-photo-url') || '';
            document.getElementById('edit_player_goals').value = btn.getAttribute('data-goals') || 0;
            document.getElementById('edit_player_assists').value = btn.getAttribute('data-assists') || 0;
            document.getElementById('edit_player_matches').value = btn.getAttribute('data-matches') || 0;
            document.getElementById('edit_player_clean_sheets').value = btn.getAttribute('data-clean-sheets') || 0;

            modal.classList.add('active');
        });
    });

    // 3. Edit Fixture
    document.querySelectorAll('.btn-edit-fixture').forEach(btn => {
        btn.addEventListener('click', () => {
            const modal = document.getElementById('editFixtureModal');
            const form = document.getElementById('editFixtureForm');
            if (!modal || !form) return;

            const id = btn.getAttribute('data-id');
            form.action = `/admin/fixtures/edit/${id}`;

            document.getElementById('edit_fix_season_id').value = btn.getAttribute('data-season-id') || '';
            document.getElementById('edit_fix_round').value = btn.getAttribute('data-round') || 1;
            document.getElementById('edit_fix_home_team').value = btn.getAttribute('data-home-id') || '';
            document.getElementById('edit_fix_away_team').value = btn.getAttribute('data-away-id') || '';
            document.getElementById('edit_fix_venue').value = btn.getAttribute('data-venue-id') || '';
            document.getElementById('edit_fix_date').value = btn.getAttribute('data-date') || '';
            document.getElementById('edit_fix_time').value = btn.getAttribute('data-time') || '';
            document.getElementById('edit_fix_status').value = btn.getAttribute('data-status') || 'scheduled';
            document.getElementById('edit_fix_summary').value = btn.getAttribute('data-summary') || '';

            modal.classList.add('active');
        });
    });

    // 4. Update Match Result
    document.querySelectorAll('.btn-update-result').forEach(btn => {
        btn.addEventListener('click', () => {
            const modal = document.getElementById('updateResultModal');
            const form = document.getElementById('updateResultForm');
            if (!modal || !form) return;

            const id = btn.getAttribute('data-id');
            form.action = `/admin/results/update/${id}`;

            document.getElementById('res_modal_teams').innerText = `${btn.getAttribute('data-home-name')} vs ${btn.getAttribute('data-away-name')}`;
            document.getElementById('res_home_score').value = btn.getAttribute('data-home-score') || 0;
            document.getElementById('res_away_score').value = btn.getAttribute('data-away-score') || 0;
            document.getElementById('res_status').value = btn.getAttribute('data-status') || 'completed';
            document.getElementById('res_minute').value = btn.getAttribute('data-minute') || 90;
            document.getElementById('res_summary').value = btn.getAttribute('data-summary') || '';

            modal.classList.add('active');
        });
    });

    // 5. Edit Venue
    document.querySelectorAll('.btn-edit-venue').forEach(btn => {
        btn.addEventListener('click', () => {
            const modal = document.getElementById('editVenueModal');
            const form = document.getElementById('editVenueForm');
            if (!modal || !form) return;

            const id = btn.getAttribute('data-id');
            form.action = `/admin/venues/edit/${id}`;

            document.getElementById('edit_venue_name').value = btn.getAttribute('data-name') || '';
            document.getElementById('edit_venue_city').value = btn.getAttribute('data-city') || '';
            document.getElementById('edit_venue_capacity').value = btn.getAttribute('data-capacity') || '';
            document.getElementById('edit_venue_surface').value = btn.getAttribute('data-surface') || '';
            document.getElementById('edit_venue_image_url').value = btn.getAttribute('data-image-url') || '';
            document.getElementById('edit_venue_desc').value = btn.getAttribute('data-desc') || '';

            modal.classList.add('active');
        });
    });
}

/**
 * Delete Confirmation Interception
 */
function initDeleteConfirmations() {
    document.querySelectorAll('form[data-confirm-delete]').forEach(form => {
        form.addEventListener('submit', (e) => {
            const msg = form.getAttribute('data-confirm-delete') || "Are you sure you want to permanently delete this item?";
            if (!confirm(msg)) {
                e.preventDefault();
            }
        });
    });
}

/**
 * Accessible mobile admin sidebar.
 * One delegated setup only; keep the menu closed after every page load.
 */
function initAdminSidebar() {
    const sidebar = document.querySelector('.admin-sidebar');
    const toggle = document.getElementById('adminSidebarToggle');
    if (!sidebar || !toggle) return;

    let backdrop = document.querySelector('.admin-sidebar-backdrop');
    if (!backdrop) {
        backdrop = document.createElement('button');
        backdrop.type = 'button';
        backdrop.className = 'admin-sidebar-backdrop';
        backdrop.setAttribute('aria-label', 'Close navigation menu');
        backdrop.setAttribute('aria-hidden', 'true');
        document.body.appendChild(backdrop);
    }

    sidebar.id = sidebar.id || 'adminSidebar';
    toggle.setAttribute('aria-controls', sidebar.id);

    const sync = () => {
        const open = sidebar.classList.contains('open') && window.innerWidth <= 900;
        sidebar.classList.toggle('open', open);
        backdrop.classList.toggle('active', open);
        backdrop.setAttribute('aria-hidden', String(!open));
        toggle.setAttribute('aria-expanded', String(open));
        toggle.innerHTML = open ? '&times;' : '&#9776;';
        document.body.classList.toggle('admin-menu-open', open);
    };
    const close = () => {
        sidebar.classList.remove('open');
        sync();
    };

    close();
    toggle.addEventListener('click', () => {
        sidebar.classList.toggle('open');
        sync();
    });
    backdrop.addEventListener('click', close);
    sidebar.querySelectorAll('a').forEach(link => link.addEventListener('click', close));
    document.addEventListener('keydown', event => {
        if (event.key === 'Escape') close();
    });
    window.addEventListener('resize', sync);
}
