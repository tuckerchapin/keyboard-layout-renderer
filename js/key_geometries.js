let loader = new THREE.STLLoader();

PROFILES = {
    SA: {
        ROW1: {},
        ROW2: {},
        ROW3: {},
        ROW4: {},
    },
    DCS: {
        ROW1: {},
        ROW2: {},
        ROW3: {},
        ROW4: {},
        ROW5: {},
    },
    DSA: {
        ROW3: {},
    },
    G20: {
        ROW3: {},
    }
};

keysLoaded = 0;

loader.load('assets/models/sa_row_1.stl', (geometry) => {PROFILES.SA.ROW1.U1 = geometry; keysLoaded++;});
loader.load('assets/models/sa_row_2.stl', (geometry) => {PROFILES.SA.ROW2.U1 = geometry; keysLoaded++;});
loader.load('assets/models/sa_row_3.stl', (geometry) => {PROFILES.SA.ROW3.U1 = geometry; keysLoaded++;});
loader.load('assets/models/sa_row_4.stl', (geometry) => {PROFILES.SA.ROW4.U1 = geometry; keysLoaded++;});

loader.load('assets/models/dcs_row_1.stl', (geometry) => {PROFILES.DCS.ROW1.U1 = geometry; keysLoaded++;});
loader.load('assets/models/dcs_row_2.stl', (geometry) => {PROFILES.DCS.ROW2.U1 = geometry; keysLoaded++;});
loader.load('assets/models/dcs_row_3.stl', (geometry) => {PROFILES.DCS.ROW3.U1 = geometry; keysLoaded++;});
loader.load('assets/models/dcs_row_4.stl', (geometry) => {PROFILES.DCS.ROW4.U1 = geometry; keysLoaded++;});
loader.load('assets/models/dcs_row_5.stl', (geometry) => {PROFILES.DCS.ROW5.U1 = geometry; keysLoaded++;});

loader.load('assets/models/dsa_row_3.stl', (geometry) => {PROFILES.DSA.ROW3.U1 = geometry; keysLoaded++;});

loader.load('assets/models/g20_row_3.stl', (geometry) => {PROFILES.G20.ROW3.U1 = geometry; keysLoaded++;});
