import React, {useState} from 'react'
import {View, Text, SafeAreaView, StyleSheet, TouchableOpacity, TextInput, ScrollView} from 'react-native'
import {Picker} from '@react-native-picker/picker';

import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function FormKecelakaanScreen({navigation}) {

    const [selectedJalur, setSelectedJalur] = useState("");
    const [selectedHari, setSelectedHari] = useState("");
    const [selectedPenyebab, setSelectedPenyebab] = useState("");
    const [selectedJenis, setSelectedJenis] = useState("");
    const [selectedKategori, setSelectedKategori] = useState("");
    const [selectedTabrakLari, setSelectedTabrakLari] = useState("");
    const [selectedAngin, setSelectedAngin] = useState("");
    const [selectedCuaca, setSelectedCuaca] = useState("");
    const [selectedJarakPandang, setSelectedJarakPandang] = useState("");
    const [selectedPosisiTabrakan, setSelectedPosisiTabrakan] = useState("");
    const [selectedRambuKecepatan, setSelectedRambuKecepatan] = useState("");
    const [selectedJenisLajur, setSelectedJenisLajur] = useState("");
    const [selectedLebarJalur, setSelectedLebarJalur] = useState("");
    const [selectedJenisMedian, setSelectedJenisMedian] = useState("");
    const [selectedPenyempitanJalan, setSelectedPenyempitanJalan] = useState("");
    const [selectedLebarBahuDalam, setSelectedLebarBahuDalam] = useState("");
    const [selectedLebarBahuLuar, setSelectedLebarBahuLuar] = useState("");
    const [selectedAlignmentJalan, setSelectedAlignmentJalan] = useState("");
    const [selectedKondisiPermukaan, setSelectedKondisiPermukaan] = useState("");
    const [selectedPengerjaanJalan, setSelectedPengerjaanJalan] = useState("");
    const [selectedUnitPertolongan, setSelectedUnitPertolongan] = useState("");
    const [selectedSumberBerita, setSelectedSumberBerita] = useState("");

    return(
        <SafeAreaView >
            <ScrollView>
                <View style={styles.base}>

                    {/* PIHAK 1 */}
                    <Text style={styles.headline}>Form Laporan Data Utama LAKA</Text>
                    <View style={styles.form}>
                        <View style={styles.form_input}>
                            <Text style={styles.form_label}>Kode Jalan Tol</Text>
                            <TextInput style={styles.text_input}/>
                        </View>
                        <View style={styles.form_input}>
                            <Text style={styles.form_label}>Nomor Kasus</Text>
                            <TextInput style={styles.text_input}/>
                        </View>
                        <View style={styles.form_input}>
                            <Text style={styles.form_label}>Kilometer</Text>
                            <TextInput style={styles.text_input}/>
                        </View>
                        <View style={styles.form_input}>
                            <Text style={styles.form_label}>Jalur</Text>
                            <Picker
                                selectedJalur={selectedJalur}
                                style={styles.picker}
                                onValueChange={(itemValue, itemIndex) => setSelectedJalur(itemValue)}
                            >
                                <Picker.Item label="A" value="A" />
                                <Picker.Item label="B" value="B" />
                                <Picker.Item label="Akses" value="Akses" />
                            </Picker>
                        </View>
                        <View style={styles.form_input}>
                            <Text style={styles.form_label}>Hari</Text>
                            <Picker
                                selectedHari={selectedHari}
                                style={styles.picker}
                                onValueChange={(itemValue, itemIndex) => setSelectedHari(itemValue)}
                            >
                                <Picker.Item label="Senin" value="Senin" />
                                <Picker.Item label="Selasa" value="Selasa" />
                                <Picker.Item label="Rabu" value="Rabu" />
                                <Picker.Item label="Kamis" value="Kamis" />
                                <Picker.Item label="Jumat" value="Jumat" />
                                <Picker.Item label="Sabtu" value="Sabtu" />
                                <Picker.Item label="Minggu" value="Minggu" />
                            </Picker>
                        </View>
                        <View style={styles.form_input}>
                            <Text style={styles.form_label}>Jumlah KR Terlibat</Text>
                            <TextInput style={styles.text_input}/>
                        </View>
                        <View style={styles.form_input}>
                            <Text style={styles.form_label}>Jumlah Korban</Text>
                            <TextInput style={styles.text_input}/>
                        </View>
                        <View style={styles.form_input}>
                            <Text style={styles.form_label}>Jumlah Saksi</Text>
                            <TextInput style={styles.text_input}/>
                        </View>
                        <View style={styles.form_input}>
                            <Text style={styles.form_label}>Penyebab Kecelakaan</Text>
                            <Picker
                                selectedPenyebab={selectedPenyebab}
                                style={styles.picker}
                                onValueChange={(itemValue, itemIndex) => setSelectedPenyebab(itemValue)}
                            >
                                <Picker.Item label="Kurang Antisipasi" value="Kurang Antisipasi" />
                                <Picker.Item label="Lengah" value="Lengah" />
                                <Picker.Item label="Mengantuk" value="Mengantuk" />
                                <Picker.Item label="Mabuk" value="Mabuk" />
                                <Picker.Item label="Jarak Rapat" value="Jarak Rapat" />
                                <Picker.Item label="Ban Pecah" value="Ban Pecah" />
                                <Picker.Item label="Selip" value="Selip" />
                                <Picker.Item label="Rem Blong" value="Rem Blong" />
                                <Picker.Item label="Kerusakan Mesin" value="Kerusakan Mesin" />
                                <Picker.Item label="Kerusakan Mekanis" value="Kerusakan Mekanis" />
                                <Picker.Item label="Kendaraan Berhenti" value="Kendaraan Berhenti" />
                                <Picker.Item label="Asap Kendaraan" value="Asap Kendaraan" />
                                <Picker.Item label="Asap Lingkungan" value="Asap Lingkungan" />
                                <Picker.Item label="Gangguan Kamtibnas" value="Gangguan Kamtibnas" />
                                <Picker.Item label="Hewan" value="Hewan" />
                                <Picker.Item label="Genangan Air" value="Genangan Air" />
                                <Picker.Item label="Material di Jalan" value="Material di Jalan" />
                                <Picker.Item label="Oli/Minyak di Jalan" value="Oli/Minyak di Jalan" />
                                <Picker.Item label="Kerusakaan Jalan" value="Kerusakaan Jalan" />
                                <Picker.Item label="Perlengkapan PML Jalan" value="Perlengkapan PML Jalan" />
                                <Picker.Item label="Perlengkapan Jalan" value="Perlengkapan Jalan" />
                                <Picker.Item label="Tidak Tertib" value="Tidak Tertib" />
                                <Picker.Item label="Lain-lain" value="Lain-lain" />
                            </Picker>
                        </View>
                        <View style={styles.form_input}>
                            <Text style={styles.form_label}>Jenis Kecelakaan</Text>
                            <Picker
                                selectedJenis={selectedJenis}
                                style={styles.picker}
                                onValueChange={(itemValue, itemIndex) => setSelectedJenis(itemValue)}
                            >
                                <Picker.Item label="Kecelakaan Sendiri" value="Kecelakaan Sendiri" />
                                <Picker.Item label="Menabrak Objek Tetap" value="Menabrak Objek Tetap" />
                                <Picker.Item label="Menabrak Rintangan" value="Menabrak Rintangan" />
                                <Picker.Item label="Menabrak Penyebrang" value="Menabrak Penyebrang" />
                                <Picker.Item label="Menabrak Kendaraan Berhenti" value="Menabrak Kendaraan Berhenti" />
                                <Picker.Item label="Tabrakan Depan-Belakang" value="Tabrakan Depan-Belakang" />
                                <Picker.Item label="Tabrakan Depan-Depan" value="Tabrakan Depan-Depan" />
                                <Picker.Item label="Tabrakan Depan-Samping" value="Tabrakan Depan-Samping" />
                                <Picker.Item label="Tabrakan Samping-Samping" value="Tabrakan Samping-Samping" />
                                <Picker.Item label="Tabrakan Beruntun" value="Tabrakan Beruntun" />
                                <Picker.Item label="Lain-lain" value="Lain-lain" />
                            </Picker>
                        </View>
                        <View style={styles.form_input}>
                            <Text style={styles.form_label}>Kategori Kecelakaan</Text>
                            <Picker
                                selectedKategori={selectedKategori}
                                style={styles.picker}
                                onValueChange={(itemValue, itemIndex) => setSelectedKategori(itemValue)}
                            >
                                <Picker.Item label="Fatal" value="Fatal" />
                                <Picker.Item label="Berat" value="Berat" />
                                <Picker.Item label="Ringan" value="Ringan" />
                                <Picker.Item label="Rusak Materi" value="Rusak Materi" />
                            </Picker>
                        </View>
                        <View style={styles.form_input}>
                            <Text style={styles.form_label}>Tabrak Lari</Text>
                            <Picker
                                selectedTabrakLari={selectedTabrakLari}
                                style={styles.picker}
                                onValueChange={(itemValue, itemIndex) => setSelectedTabrakLari(itemValue)}
                            >
                                <Picker.Item label="Bukan Tabrak Lari" value="Bukan Tabrak Lari" />
                                <Picker.Item label="Ya, Tabrak Lari Tanpa Saksi" value="Ya, Tabrak Lari Tanpa Saksi" />
                                <Picker.Item label="Ya, Tabrak Lari ada Saksi" value="Ya, Tabrak Lari ada Saksi" />
                            </Picker>
                        </View>
                        <View style={styles.form_input}>
                            <Text style={styles.form_label}>Angin</Text>
                            <Picker
                                selectedAngin={selectedAngin}
                                style={styles.picker}
                                onValueChange={(itemValue, itemIndex) => setSelectedAngin(itemValue)}
                            >
                                <Picker.Item label="Lemah" value="Lemah" />
                                <Picker.Item label="Kencang Searah" value="Kencang Searah" />
                                <Picker.Item label="Kencang Melintang" value="Kencang Melintang" />
                            </Picker>
                        </View>
                        <View style={styles.form_input}>
                            <Text style={styles.form_label}>Cuaca</Text>
                            <Picker
                                selectedCuaca={selectedCuaca}
                                style={styles.picker}
                                onValueChange={(itemValue, itemIndex) => setSelectedCuaca(itemValue)}
                            >
                                <Picker.Item label="Cerah" value="Cerah" />
                                <Picker.Item label="Mendung" value="Mendung" />
                                <Picker.Item label="Berkabut" value="Berkabut" />
                                <Picker.Item label="Berdebu" value="Berdebu" />
                                <Picker.Item label="Berasap" value="Berasap" />
                                <Picker.Item label="Gerimis" value="Gerimis" />
                                <Picker.Item label="Hujan Lebat" value="Hujan Lebat" />
                                <Picker.Item label="Lain-lain" value="Gerimis" />
                            </Picker>
                        </View>
                        <View style={styles.form_input}>
                            <Text style={styles.form_label}>Jarak Pandang</Text>
                            <Picker
                                selectedJarakPandang={selectedJarakPandang}
                                style={styles.picker}
                                onValueChange={(itemValue, itemIndex) => setSelectedJarakPandang(itemValue)}
                            >
                                <Picker.Item label="<300m" value="<300m" />
                                <Picker.Item label="30m-100m" value="30m-100m" />
                                <Picker.Item label=">100m" value=">100m" />
                            </Picker>
                        </View>
                        <View style={styles.form_input}>
                            <Text style={styles.form_label}>Posisi Tabrakan</Text>
                            <Picker
                                selectedPosisiTabrakan={selectedPosisiTabrakan}
                                style={styles.picker}
                                onValueChange={(itemValue, itemIndex) => setSelectedPosisiTabrakan(itemValue)}
                            >
                                <Picker.Item label="Lajur Satu" value="Lajur Satu" />
                                <Picker.Item label="Lajur Dua" value="Lajur Dua" />
                                <Picker.Item label="Lajur Tiga" value="Lajur Tiga" />
                                <Picker.Item label="Lajur Empat" value="Lajur Empat" />
                                <Picker.Item label="RAMP" value="RAMP" />
                                <Picker.Item label="Bahu Jalan" value="Bahu Jalan" />
                                <Picker.Item label="Gerbang Tol" value="Gerbang Tol" />
                                <Picker.Item label="Lain-lain" value="Lain-lain" />
                            </Picker>
                        </View>
                        <View style={styles.form_input}>
                            <Text style={styles.form_label}>Rambu Batas Kecepatan</Text>
                            <Picker
                                selectedRambuKecepatan={selectedRambuKecepatan}
                                style={styles.picker}
                                onValueChange={(itemValue, itemIndex) => setSelectedRambuKecepatan(itemValue)}
                            >
                                <Picker.Item label="Tidak Ada" value="Tidak Ada" />
                                <Picker.Item label="40 Kpj" value="40 Kpj" />
                                <Picker.Item label="60 Kpj" value="60 Kpj" />
                                <Picker.Item label="80 Kpj" value="80 Kpj" />
                                <Picker.Item label="100 Kpj" value="100 Kpj" />
                                <Picker.Item label=">100 Kpj" value=">100 Kpj" />
                                <Picker.Item label="Lain-lain" value="Lain-lain" />
                            </Picker>
                        </View>
                        <View style={styles.form_input}>
                            <Text style={styles.form_label}>Jenis Lajur & Arah</Text>
                            <Picker
                                selectedJenisLajur={selectedJenisLajur}
                                style={styles.picker}
                                onValueChange={(itemValue, itemIndex) => setSelectedJenisLajur(itemValue)}
                            >
                                <Picker.Item label="1-Lajur-1-Arah" value="1-Lajur-1-Arah" />
                                <Picker.Item label="2-Lajur-2-Arah" value="2-Lajur-2-Arah" />
                                <Picker.Item label="2-Lajur-1-Arah" value="2-Lajur-1-Arah" />
                                <Picker.Item label="3-Lajur-1-Arah" value="3-Lajur-1-Arah" />
                                <Picker.Item label="4-Lajur-1-Arah" value="4-Lajur-1-Arah" />
                                <Picker.Item label="Lain-lain" value="Lain-lain" />
                            </Picker>
                        </View>
                        <View style={styles.form_input}>
                            <Text style={styles.form_label}>Lebar Jalur</Text>
                            <Picker
                                selectedLebarJalur={selectedLebarJalur}
                                style={styles.picker}
                                onValueChange={(itemValue, itemIndex) => setSelectedLebarJalur(itemValue)}
                            >
                                <Picker.Item label="<3m" value="<3m" />
                                <Picker.Item label="3m-3,5m" value="3m-3,5m" />
                                <Picker.Item label=">3,5m" value=">3,5m" />
                                <Picker.Item label="Lain-lain" value="Lain-lain" />
                                <Picker.Item label="4-Lajur-1-Arah" value="4-Lajur-1-Arah" />
                                <Picker.Item label="Lain-lain" value="Lain-lain" />
                            </Picker>
                        </View>
                        <View style={styles.form_input}>
                            <Text style={styles.form_label}>Lebar Median</Text>
                            <TextInput style={styles.text_input}/>
                        </View>
                        <View style={styles.form_input}>
                            <Text style={styles.form_label}>Jenis Median</Text>
                            <Picker
                                selectedJenisMedian={selectedJenisMedian}
                                style={styles.picker}
                                onValueChange={(itemValue, itemIndex) => setSelectedJenisMedian(itemValue)}
                            >
                                <Picker.Item label="Tidak Ada" value="Tidak Ada" />
                                <Picker.Item label="Rumput" value="Rumput" />
                                <Picker.Item label="Pagar Pemisah" value="Pagar Pemisah" />
                                <Picker.Item label="Tembok Pemisah" value="Tembok Pemisah" />
                                <Picker.Item label="Kerb. Jalan" value="Kerb. Jalan" />
                                <Picker.Item label="Saluran Air" value="Saluran Air" />
                                <Picker.Item label="Lain-lain" value="Lain-lain" />
                            </Picker>
                        </View>
                        <View style={styles.form_input}>
                            <Text style={styles.form_label}>Penyempitan Jalan</Text>
                            <Picker
                                selectedPenyempitanJalan={selectedPenyempitanJalan}
                                style={styles.picker}
                                onValueChange={(itemValue, itemIndex) => setSelectedPenyempitanJalan(itemValue)}
                            >
                                <Picker.Item label="Tidak Ada" value="Tidak Ada" />
                                <Picker.Item label="Ya, ada Penyempitan" value="Ya, ada Penyempitan" />
                            </Picker>
                        </View>
                        <View style={styles.form_input}>
                            <Text style={styles.form_label}>Lebar Bahu Dalam</Text>
                            <Picker
                                selectedLebarBahuDalam={selectedLebarBahuDalam}
                                style={styles.picker}
                                onValueChange={(itemValue, itemIndex) => setSelectedLebarBahuDalam(itemValue)}
                            >
                                <Picker.Item label="<1m" value="<1m" />
                                <Picker.Item label="1m-2m" value="1m-2m" />
                                <Picker.Item label=">2m" value=">2m" />
                            </Picker>
                        </View>
                        <View style={styles.form_input}>
                            <Text style={styles.form_label}>Lebar Bahu Luar</Text>
                            <Picker
                                selectedLebarBahuLuar={selectedLebarBahuLuar}
                                style={styles.picker}
                                onValueChange={(itemValue, itemIndex) => setSelectedLebarBahuLuar(itemValue)}
                            >
                                <Picker.Item label="<1m" value="<1m" />
                                <Picker.Item label="1m-2m" value="1m-2m" />
                                <Picker.Item label=">2m" value=">2m" />
                            </Picker>
                        </View>
                        <View style={styles.form_input}>
                            <Text style={styles.form_label}>Alignment Jalan</Text>
                            <Picker
                                selectedAlignmentJalan={selectedAlignmentJalan}
                                style={styles.picker}
                                onValueChange={(itemValue, itemIndex) => setSelectedAlignmentJalan(itemValue)}
                            >
                                <Picker.Item label="Lurus Datar" value="Lurus Datar" />
                                <Picker.Item label="Lurus Turun" value="Lurus Turun" />
                                <Picker.Item label="Lurus Naik" value="Lurus Naik" />
                                <Picker.Item label="Tikungan Datar" value="Tikungan Datar" />
                                <Picker.Item label="Tikungan Naik" value="Tikungan Naik" />
                                <Picker.Item label="Tikungan Turun" value="Tikungan Turun" />
                                <Picker.Item label="Lain-lain" value="Lain-lain" />
                            </Picker>
                        </View>
                        <View style={styles.form_input}>
                            <Text style={styles.form_label}>Kondisi Permukaan</Text>
                            <Picker
                                selectedKondisiPermukaan={selectedKondisiPermukaan}
                                style={styles.picker}
                                onValueChange={(itemValue, itemIndex) => setSelectedKondisiPermukaan(itemValue)}
                            >
                                <Picker.Item label="Kering" value="Kering" />
                                <Picker.Item label="Basah" value="Basah" />
                                <Picker.Item label="Berpasir" value="Berpasir" />
                                <Picker.Item label="Berminyak" value="Berminyak" />
                                <Picker.Item label="Aspal Meleleh" value="Aspal Meleleh" />
                                <Picker.Item label="Genangan Air" value="Genangan Air" />
                                <Picker.Item label="Berlumpur" value="Berlumpur" />
                                <Picker.Item label="Lain-lain" value="Lain-lain" />
                            </Picker>
                        </View>
                        <View style={styles.form_input}>
                            <Text style={styles.form_label}>Pengerjaan Jalan/Proyek</Text>
                            <Picker
                                selectedPengerjaanJalan={selectedPengerjaanJalan}
                                style={styles.picker}
                                onValueChange={(itemValue, itemIndex) => setSelectedPengerjaanJalan(itemValue)}
                            >
                                <Picker.Item label="Tidak Ada" value="Tidak Ada" />
                                <Picker.Item label="Ada, Rambu Lengkap" value="Ada, Rambu Lengkap" />
                                <Picker.Item label="Ada, Rambu Tidak Lengkap" value="Ada, Rambu Tidak Lengkap" />
                            </Picker>
                        </View>
                        <View style={styles.form_input}>
                            <Text style={styles.form_label}>Kerusakaan Sarana</Text>
                            <TextInput style={styles.text_input}/>
                        </View>
                        <View style={styles.form_input}>
                            <Text style={styles.form_label}>Volume</Text>
                            <TextInput style={styles.text_input}/>
                        </View>
                    </View>

                    <View style={styles.space} />

                    {/* PIHAK 2 */}
                    <Text style={styles.headline}>Form Penanganan Kecelakaan</Text>
                    <View style={styles.form}>
                        <View style={styles.form_input}>
                            <Text style={styles.form_label}>Unit Pertolongan</Text>
                            <Picker
                                selectedUnitPertolongan={selectedUnitPertolongan}
                                style={styles.picker}
                                onValueChange={(itemValue, itemIndex) => setSelectedUnitPertolongan(itemValue)}
                            >
                                <Picker.Item label="1" value="1" />
                                <Picker.Item label="2" value="2" />
                                <Picker.Item label="3" value="3" />
                                <Picker.Item label="4" value="4" />
                                <Picker.Item label="5" value="5" />
                                <Picker.Item label="6" value="6" />
                                <Picker.Item label="7" value="7" />
                                <Picker.Item label="8" value="8" />
                                <Picker.Item label="9" value="9" />
                                <Picker.Item label="10" value="10" />
                            </Picker>
                        </View>
                        <View style={styles.form_input}>
                            <Text style={styles.form_label}>Patroli PT. Jasa Marga</Text>
                            <TextInput style={styles.text_input}/>
                        </View>
                        <View style={styles.form_input}>
                            <Text style={styles.form_label}>Polisi</Text>
                            <TextInput style={styles.text_input}/>
                        </View>
                        <View style={styles.form_input}>
                            <Text style={styles.form_label}>Mobil Derek</Text>
                            <TextInput style={styles.text_input}/>
                        </View>
                        <View style={styles.form_input}>
                            <Text style={styles.form_label}>Ambulance</Text>
                            <TextInput style={styles.text_input}/>
                        </View>
                        <View style={styles.form_input}>
                            <Text style={styles.form_label}>RESCUE</Text>
                            <TextInput style={styles.text_input}/>
                        </View>
                        <View style={styles.form_input}>
                            <Text style={styles.form_label}>Alat Berat</Text>
                            <TextInput style={styles.text_input}/>
                        </View>
                        <View style={styles.form_input}>
                            <Text style={styles.form_label}>Pengguna Jalan</Text>
                            <TextInput style={styles.text_input}/>
                        </View>
                        <View style={styles.form_input}>
                            <Text style={styles.form_label}>Masyarakat</Text>
                            <TextInput style={styles.text_input}/>
                        </View>
                        <View style={styles.form_input}>
                            <Text style={styles.form_label}>Jam Informasi Diterima</Text>
                            <TextInput style={styles.text_input}/>
                        </View>
                        <View style={styles.form_input}>
                            <Text style={styles.form_label}>Jam Pertolongan Datang</Text>
                            <TextInput style={styles.text_input}/>
                        </View>
                        <View style={styles.form_input}>
                            <Text style={styles.form_label}>Jam TKP Bersih</Text>
                            <TextInput style={styles.text_input}/>
                        </View>
                        <View style={styles.form_input}>
                            <Text style={styles.form_label}>Lamanya Jalan Ditutup</Text>
                            <TextInput style={styles.text_input}/>
                        </View>
                        <View style={styles.form_input}>
                            <Text style={styles.form_label}>Lama Kemacetan</Text>
                            <TextInput style={styles.text_input}/>
                        </View>
                        <View style={styles.form_input}>
                            <Text style={styles.form_label}>Panjang Antrean</Text>
                            <TextInput style={styles.text_input}/>
                        </View>
                        <View style={styles.form_input}>
                            <Text style={styles.form_label}>Kendaraan</Text>
                            <TextInput style={styles.text_input}/>
                        </View>
                        <View style={styles.form_input}>
                            <Text style={styles.form_label}>Sumber Berita</Text>
                            <Picker
                                selectedSumberBerita={selectedSumberBerita}
                                style={styles.picker}
                                onValueChange={(itemValue, itemIndex) => setSelectedSumberBerita(itemValue)}
                            >
                                <Picker.Item label="Jasa Marga" value="Jasa Marga" />
                                <Picker.Item label="Polisi" value="Polisi" />
                                <Picker.Item label="Pemakai Jalan" value="Pemakai Jalan" />
                                <Picker.Item label="Penduduk" value="Penduduk" />
                                <Picker.Item label="Lain-lain" value="Lain-lain" />
                            </Picker>
                        </View>
                        <View style={styles.form_input}>
                            <Text style={styles.form_label}>Korban Dibawa Ke</Text>
                            <TextInput style={styles.text_input}/>
                        </View>
                    </View>

                    <View style={styles.space} />

                    <Text style={styles.headline}>Catatan</Text>
                    <View style={styles.form}>
                        <View style={styles.form_input}>
                            <Text style={styles.form_label}>Kendaraan Dibawa Ke</Text>
                            <TextInput style={styles.text_input}/>
                        </View>
                        <View style={styles.form_input}>
                            <Text style={styles.form_label}>Persoalan Diteruskan Ke</Text>
                            <TextInput style={styles.text_input}/>
                        </View>
                        <View style={styles.form_input}>
                            <Text style={styles.form_label}>Kode Panggilan</Text>
                            <TextInput style={styles.text_input}/>
                        </View>
                        <View style={styles.form_input}>
                            <Text style={styles.form_label}>Uraian Singkat Kejadian</Text>
                            <TextInput style={styles.text_input}/>
                        </View>
                    </View>                          
                </View>

                <View style={styles.bottom_side}>
                    <TouchableOpacity 
                        style={styles.buttonPrimary}
                        onPress={() => {navigation.navigate('Laporan')}}
                    >
                        <MaterialCommunityIcons name="file-document-edit" size={24} color="white" />
                        <Text style={[styles.labelPrimary, {marginLeft:4}]}> Laporkan</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    base: {
        backgroundColor: '#1F487E',
    },

    space: {
        marginBottom: 24,
        borderBottomWidth: 0.8,
        borderColor: "#BABEC3",
        marginHorizontal: 12
    },

    headline: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
    },

    form: {
        flexDirection: 'column',
        padding: 12,
        marginBottom: 12,
    },

    form_label: {
        color: 'white',
        fontSize: 16,
        width: '40%',
        fontWeight: 'bold'
    },

    form_input: {
        flexDirection: 'row',
        marginVertical: 8,
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    text_input: {
        backgroundColor: "white",
        borderRadius: 20,
        width: '60%',
        fontSize: 16,
        paddingHorizontal: 12,
        paddingVertical:2
    },

    form_text: {
        width: '75%',
        fontSize: 16,
        paddingHorizontal: 12,
        color: 'white',
    },

    bottom_side: {
        paddingVertical: 36
    },

    buttonPrimary: {
        backgroundColor: "#1F487E",
        borderRadius: 20,
        borderWidth: 1.5,
        borderColor: "#1F487E",
        paddingHorizontal: 18,
        paddingVertical: 8,
        marginHorizontal: 5,
        width: "70%",
        alignItems: "center",
        alignSelf: "center",
        justifyContent: "center",
        flexDirection: "row"
    },

    labelPrimary: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold"
    },

    picker: {
        backgroundColor: 'white',
        borderRadius: 20,
        width: '60%',
        fontSize: 16,
        paddingHorizontal: 12,
        height: 20
    },

});