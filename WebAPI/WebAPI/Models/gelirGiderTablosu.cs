//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace WebAPI.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class gelirGiderTablosu
    {
        public int gelirGiderID { get; set; }
        public string HarcamaAdi { get; set; }
        public Nullable<double> HarcamaTutari { get; set; }
        public string GelirAdi { get; set; }
        public Nullable<double> GelirTutari { get; set; }
        public Nullable<int> userid { get; set; }
    
        public virtual Users Users { get; set; }
    }
}
