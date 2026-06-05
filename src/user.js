import './style.css'
export function renderUserDashboard() {
    const app  = document.getElementById("app");
    const user = JSON.parse(localStorage.getItem("user"));

    app.innerHTML = `
    <div class="min-h-screen bg-gray-950 text-gray-100">

      <!-- NAVBAR -->
      <nav class="sticky top-0 z-50 flex items-center justify-between px-4 md:px-10 py-4 md:py-5
                  border-b border-white/5 bg-gray-950/80 backdrop-blur-md">
        <span class="text-lg font-extrabold tracking-tight text-white">
          Reservations<span class="text-violet-400">board</span>
        </span>
        <div class="flex items-center gap-3 md:gap-4">
          <span class="hidden sm:inline font-mono text-xs text-violet-400 bg-violet-400/10
                       border border-violet-400/20 px-3 py-1 rounded-full tracking-wider">
            ${user?.username || "user"} · ${user?.role || "user"}
          </span>
          <button id="darkmode-btn"
                  class="text-xs font-semibold text-gray-400 border border-white/10
                         px-4 py-1.5 rounded-lg cursor-pointer transition-all duration-200
                         hover:border-violet-500/40 hover:text-violet-400 hover:bg-red-500/5">
            Day/Nigth
          </button>
          <button id="logout-btn"
                  class="text-xs font-semibold text-gray-400 border border-white/10
                         px-4 py-1.5 rounded-lg cursor-pointer transition-all duration-200
                         hover:border-red-500/40 hover:text-red-400 hover:bg-red-500/5">
            Log out
          </button>
        </div>
      </nav>

      <!-- MAIN -->
      <main class="max-w-3xl mx-auto px-4 md:px-6 py-8 md:py-12">

        <!-- BOXES -->
        <div class="grid grid-cols-3 gap-3 md:gap-4 mb-8 md:mb-12">
          <div class="relative overflow-hidden bg-white/[0.03] border border-white/[0.07]
                      rounded-2xl p-4 md:p-6 transition-all duration-200 hover:border-violet-400/30
                      before:absolute before:inset-x-0 before:top-0 before:h-px
                      before:bg-gradient-to-r before:from-transparent before:via-violet-400/40 before:to-transparent">
            <p class="font-mono text-[0.6rem] md:text-[0.65rem] text-gray-500 uppercase tracking-widest mb-2 md:mb-3">Total reservations</p>
            <p id="stat-total" class="text-3xl md:text-4xl font-extrabold tracking-tighter text-gray-100">—</p>
          </div>
          <div class="relative overflow-hidden bg-white/[0.03] border border-white/[0.07]
                      rounded-2xl p-4 md:p-6 transition-all duration-200 hover:border-emerald-400/30
                      before:absolute before:inset-x-0 before:top-0 before:h-px
                      before:bg-gradient-to-r before:from-transparent before:via-emerald-400/40 before:to-transparent">
            <p class="font-mono text-[0.6rem] md:text-[0.65rem] text-gray-500 uppercase tracking-widest mb-2 md:mb-3">Completed</p>
            <p id="stat-done" class="text-3xl md:text-4xl font-extrabold tracking-tighter text-emerald-400">—</p>
          </div>
          <div class="relative overflow-hidden bg-white/[0.03] border border-white/[0.07]
                      rounded-2xl p-4 md:p-6 transition-all duration-200 hover:border-amber-400/30
                      before:absolute before:inset-x-0 before:top-0 before:h-px
                      before:bg-gradient-to-r before:from-transparent before:via-amber-400/40 before:to-transparent">
            <p class="font-mono text-[0.6rem] md:text-[0.65rem] text-gray-500 uppercase tracking-widest mb-2 md:mb-3">Pending</p>
            <p id="stat-pending" class="text-3xl md:text-4xl font-extrabold tracking-tighter text-amber-400">—</p>
          </div>
        </div>

        <!-- SECTION TITLE -->
        <h2 class="text-base font-bold tracking-tight text-gray-100 mb-5 md:mb-6">New Reservation</h2>

        <!-- ADD FORM -->
        <div class="flex flex-col sm:flex-col gap-3 mb-6 md:mb-8">
          <input
            id="new-reservation-title"
            type="text"
            placeholder="Write your desired room..."
            autocomplete="off"
            class="flex-1 bg-white/[0.04] border border-white/10 text-gray-100 text-sm
                   placeholder-gray-600 px-5 py-3 rounded-xl outline-none transition-all duration-200
                   focus:border-violet-400/50 focus:bg-white/[0.06]"
          />
          <input
            id="new-reservation-date"
            type="text"
            placeholder="Write your desired date..."
            autocomplete="off"
            class="flex-1 bg-white/[0.04] border border-white/10 text-gray-100 text-sm
                   placeholder-gray-600 px-5 py-3 rounded-xl outline-none transition-all duration-200
                   focus:border-violet-400/50 focus:bg-white/[0.06]"
          />
          <input
            id="new-reservation-startHour"
            type="text"
            placeholder="Write start hour..."
            autocomplete="off"
            class="flex-1 bg-white/[0.04] border border-white/10 text-gray-100 text-sm
                   placeholder-gray-600 px-5 py-3 rounded-xl outline-none transition-all duration-200
                   focus:border-violet-400/50 focus:bg-white/[0.06]"
          />
          <input
            id="new-reservation-endHour"
            type="text"
            placeholder="Write end hour..."
            autocomplete="off"
            class="flex-1 bg-white/[0.04] border border-white/10 text-gray-100 text-sm
                   placeholder-gray-600 px-5 py-3 rounded-xl outline-none transition-all duration-200
                   focus:border-violet-400/50 focus:bg-white/[0.06]"
          />
          <input
            id="new-reservation-reason"
            type="text"
            placeholder="Write reservation reason..."
            autocomplete="off"
            class="flex-1 bg-white/[0.04] border border-white/10 text-gray-100 text-sm
                   placeholder-gray-600 px-5 py-3 rounded-xl outline-none transition-all duration-200
                   focus:border-violet-400/50 focus:bg-white/[0.06]"
          />
          <button id="add-reservation-btn"
                  class="bg-gradient-to-br from-violet-700 to-violet-400 text-white text-sm font-bold
                         px-6 py-3 rounded-xl cursor-pointer whitespace-nowrap transition-all duration-200
                         hover:opacity-85 hover:-translate-y-px active:translate-y-0 border-0">
            + Add
          </button>
        </div>

        <!-- LIST -->
        <div id="reservation-list" class="flex flex-col gap-3">
          <p class="text-center py-10 text-gray-600 font-mono text-xs tracking-widest">
            loading reservations...
          </p>
        </div>

      </main>
    </div>
    `;

    const API     = "http://localhost:3000/reservations";
    let   reservations   = [];


    const reservationList = document.getElementById("reservation-list");


    function updateStats() {
        const total   = reservations.length;
        const done    = reservations.filter(t => t.completed).length;
        document.getElementById("stat-total").textContent   = total;
        document.getElementById("stat-done").textContent    = done;
        document.getElementById("stat-pending").textContent = total - done;
    }


    function renderList() {
        if (reservations.length === 0) {
            reservationList.innerHTML = `
              <p class="text-center py-16 text-gray-600 font-mono text-xs tracking-widest">
                No reservations yet · add one above
              </p>`;
            return;
        }

        reservationList.innerHTML = reservations.map(reservation => `
          <div class="flex items-center gap-3 md:gap-4 bg-white/[0.03] border border-white/[0.07]
                      rounded-2xl px-4 md:px-5 py-3 md:py-4 transition-all duration-200
                      hover:bg-white/[0.05] hover:border-white/10 reservation-item"
                      data-id="${reservation.id}">
               

            <div data-action="toggle" data-id="${reservation.id}"
                 class="w-6 h-6 rounded-lg border-2 flex-shrink-0 flex items-center justify-center
                        cursor-pointer transition-all duration-200 select-none
                        ${reservation.completed
                          ? 'bg-emerald-400 border-emerald-400 text-gray-950 text-xs font-black'
                          : 'border-white/15 hover:border-emerald-400/50'}">
              ${reservation.completed ? '✓' : ''}
            </div>

            <span data-id="${reservation.reason}"
                  class="flex-1 text-sm transition-colors duration-200 reservation-text
                         ${reservation.completed ? 'line-through text-gray-600' : 'text-gray-100'}">
              ${reservation.reason}
            </span>
            <span data-id="${reservation.id}"
                  class="flex-1 text-sm transition-colors duration-200 reservation-text
                         ${reservation.completed ? 'line-through text-gray-600' : 'text-gray-100'}">
              ${reservation.title}
            </span>
            <span data-id="${reservation.date}"
                  class="flex-1 text-sm transition-colors duration-200 reservation-text
                         ${reservation.completed ? 'line-through text-gray-600' : 'text-gray-100'}">
              ${reservation.date}
            </span>
            <span data-id="${reservation.startHour}"
                  class="flex-1 text-sm transition-colors duration-200 reservation-text
                         ${reservation.completed ? 'line-through text-gray-600' : 'text-gray-100'}">
              ${reservation.startHour}
            </span>
            <span data-id="${reservation.endHour}"
                  class="flex-1 text-sm transition-colors duration-200 reservation-text
                         ${reservation.completed ? 'line-through text-gray-600' : 'text-gray-100'}">
              ${reservation.endHour}
            </span>
            <span data-id="${reservation.approved}"
                  class="flex-1 text-sm transition-colors duration-200 reservation-text
                         ${reservation.completed ? 'line-through text-gray-600' : 'text-gray-100'}">
              ${reservation.approved}
            </span>
            <div>
            <input data-id="${reservation.id}" value="${reservation.title}"
                   class="flex-1 hidden bg-violet-400/10 border border-violet-400/40 text-gray-100
                          text-sm px-3 py-1 rounded-lg outline-none reservation-edit-input" />
            <input data-id="${reservation.id}" value="${reservation.reason}"
                   class="flex-1 hidden bg-violet-400/10 border border-violet-400/40 text-gray-100
                          text-sm px-3 py-1 rounded-lg outline-none reservation-reason-input" />
                          <input data-id="${reservation.id}" value="${reservation.date}"
                   class="flex-1 hidden bg-violet-400/10 border border-violet-400/40 text-gray-100
                          text-sm px-3 py-1 rounded-lg outline-none reservation-date-input" />
                          <input data-id="${reservation.id}" value="${reservation.startHour}"
                   class="flex-1 hidden bg-violet-400/10 border border-violet-400/40 text-gray-100
                          text-sm px-3 py-1 rounded-lg outline-none reservation-startHour-input" />
                          <input data-id="${reservation.id}" value="${reservation.endHour}"
                   class="flex-1 hidden bg-violet-400/10 border border-violet-400/40 text-gray-100
                          text-sm px-3 py-1 rounded-lg outline-none reservation-endHour-input" />
                            </div>

            <span class="hidden sm:inline font-mono text-[0.6rem] tracking-widest px-2.5 py-0.5 rounded-full
                         flex-shrink-0 border
                         ${reservation.completed
                           ? 'bg-emerald-400/10 text-emerald-400 border-emerald-400/20'
                           : 'bg-amber-400/10 text-amber-400 border-amber-400/20'}">
              ${reservation.completed ? 'DONE' : 'PENDING'}
            </span>

            <div class="flex gap-2 flex-shrink-0">
              <button data-action="edit" data-id="${reservation.id}" title="Edit"
                      class="btn-edit w-8 h-8 rounded-lg border border-white/8 text-gray-500 text-sm
                             flex items-center justify-center cursor-pointer transition-all duration-200
                             hover:bg-violet-400/15 hover:border-violet-400/30 hover:text-violet-400">✎</button>
              <button data-action="save" data-id="${reservation.id}" title="Save"
                      class="btn-save hidden w-8 h-8 rounded-lg border border-white/8 text-gray-500 text-sm
                             flex items-center justify-center cursor-pointer transition-all duration-200
                             hover:bg-emerald-400/15 hover:border-emerald-400/30 hover:text-emerald-400">✓</button>
              <button data-action="delete" data-id="${reservation.id}" title="Delete"
                      class="w-8 h-8 rounded-lg border border-white/8 text-gray-500 text-sm
                             flex items-center justify-center cursor-pointer transition-all duration-200
                             hover:bg-red-500/10 hover:border-red-500/30 hover:text-red-400">✕</button>
            </div>
          </div>
        `).join('');
    }

    async function fetchreservations() {
        const res = await fetch(API);
        reservations = await res.json();
        updateStats();
        renderList();
    }

    
    

    async function togglereservation(id) {

      const reservation = reservations.find(t => t.id == id);
      if (!reservation) return;
      const res = await fetch(`${API}/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ completed: !reservation.completed })
      });
      if (!res.ok) return;
      reservations = reservations.map(t => t.id == id ? { ...t, completed: !t.completed } : t);
      updateStats();
      renderList();
    }

    async function updatereservation(id, newTitle, newDate, newStartHour, newendHour, newReason) {
      const res = await fetch(`${API}/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: newTitle,
          date : newDate,
          startHour : newStartHour,
          endHour : newendHour,
          reason : newReason
         })
      });
      if (!res.ok) return;
      reservations = reservations.map(t => t.id == id ? { ...t, title: newTitle } : t);
      renderList();
    }

    async function deletereservation(id) {
      await fetch(`${API}/${id}`, { method: "DELETE" });
      reservations = reservations.filter(t => t.id != id);
      updateStats();
      renderList();
    }

    reservationList.addEventListener("click", async (e) => {
      const action = e.target.dataset.action;
      const id     = e.target.dataset.id;
      if (!action || id == null) return;

      if (action === "toggle") {
        await togglereservation(id);
      }

        if (action === "edit") {
            const item = reservationList.querySelector(`.reservation-item[data-id="${id}"]`);
            item.querySelector(`.reservation-text[data-id="${id}"]`).classList.add("hidden");
            item.querySelector(`.reservation-edit-input[data-id="${id}"]`).classList.remove("hidden");
            item.querySelector(`.reservation-date-input[data-id="${id}"]`).classList.remove("hidden");
            item.querySelector(`.reservation-startHour-input[data-id="${id}"]`).classList.remove("hidden");
            item.querySelector(`.reservation-endHour-input[data-id="${id}"]`).classList.remove("hidden");
            item.querySelector(`.reservation-reason-input[data-id="${id}"]`).classList.remove("hidden");
            item.querySelector(`.btn-edit[data-id="${id}"]`).classList.add("hidden");
            item.querySelector(`.btn-save[data-id="${id}"]`).classList.remove("hidden");
            item.querySelector(`.reservation-edit-input[data-id="${id}"]`).focus();
            item.querySelector(`.reservation-reason-input[data-id="${id}"]`).focus();
            item.querySelector(`.reservation-date-input[data-id="${id}"]`).focus();
            item.querySelector(`.reservation-startHour-input[data-id="${id}"]`).focus();
            item.querySelector(`.reservation-endHour-input[data-id="${id}"]`).focus();
        }

        if (action === "save") {
            const input    = reservationList.querySelector(`.reservation-edit-input[data-id="${id}"]`);
            const newTitle = input.value.trim();
            const inputreason    = reservationList.querySelector(`.reservation-reason-input[data-id="${id}"]`);
            const newReason = inputreason.value.trim();
            const inputdate    = reservationList.querySelector(`.reservation-date-input[data-id="${id}"]`);
            const newDate = inputdate.value.trim();
            const inputstartHour    = reservationList.querySelector(`.reservation-startHour-input[data-id="${id}"]`);
            const newStartHour = inputstartHour.value.trim();
            const inputendHour    = reservationList.querySelector(`.reservation-endHour-input[data-id="${id}"]`);
            const newendHour = inputendHour.value.trim();

            if (newTitle && newReason && newDate && newStartHour && newendHour) await updatereservation(id, newTitle, newDate, newStartHour, newendHour, newReason);
        }

        if (action === "delete") {
            await deletereservation(id);
        }
    });

    async function addreservation(newtitleinput,newendHourinput, newreasoninput, newdateinput,newstartHourinput) {

    const res = await fetch(API, {
      method: 'POST', 
      headers: { 
        'Content-Type': 'application/json' 
      },
      body: JSON.stringify({ 
      "title": newtitleinput,
      "date": newdateinput,
      "startHour": newstartHourinput,
      "endHour": newendHourinput,
      "reason": newreasoninput,
      "completed": false})
      
    });const newreservation = await res.json();
        reservations.push(newreservation);
        updateStats();
        renderList();
    }

    document.getElementById("add-reservation-btn").addEventListener("click", async () => {
      
        const input = document.getElementById("new-reservation-title");
        const newtitleinput = input.value.trim();
        const inputdate = document.getElementById("new-reservation-date");
        const newdateinput = inputdate.value.trim();
        const inputstartHour = document.getElementById("new-reservation-startHour");
        const newstartHourinput = inputstartHour.value.trim();
        const inputendHour = document.getElementById("new-reservation-endHour");
        const newendHourinput = inputendHour.value.trim();
        const inputreason = document.getElementById("new-reservation-reason");
        const newreasoninput = inputreason.value.trim();
        if (!newtitleinput && !newdateinput && !newstartHourinput && !newendHourinput && !newreasoninput) return;
        newtitleinput.value 
        newdateinput.value 
        newstartHourinput.value
        newendHourinput.value 
        newreasoninput.value 
        await addreservation(newtitleinput, newdateinput, newstartHourinput, newendHourinput, newreasoninput);
    });

    

    document.getElementById("new-reservation-title" && "new-reservation-date" && "new-reservation-startHour"  && "new-reservation-endHour"  && "new-reservation-reason" ).addEventListener("keydown", async (e) => {
        if (e.key === "Enter") document.getElementById("add-reservation-btn").click();
    });

    document.getElementById("logout-btn").addEventListener("click", () => {
        localStorage.removeItem("user");
        window.history.pushState({}, "", "/");
        import("./router.js").then(m => m.renderPage("/"));
    });

    fetchreservations();
}