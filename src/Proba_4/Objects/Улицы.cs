﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Proba_4
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Улицы.
    /// </summary>
    // *** Start programmer edit section *** (Улицы CustomAttributes)

    // *** End programmer edit section *** (Улицы CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("УлицыE", new string[] {
            "Наименование as \'Наименование\'",
            "Город as \'Город\'",
            "Город.Наименование as \'Наименование\'"}, Hidden=new string[] {
            "Город.Наименование"})]
    [MasterViewDefineAttribute("УлицыE", "Город", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Наименование")]
    [View("УлицыL", new string[] {
            "Наименование as \'Наименование\'",
            "Город.Наименование as \'Наименование\'"})]
    public class Улицы : ICSSoft.STORMNET.DataObject
    {
        
        private string fНаименование;
        
        private IIS.Proba_4.Город fГород;
        
        // *** Start programmer edit section *** (Улицы CustomMembers)

        // *** End programmer edit section *** (Улицы CustomMembers)

        
        /// <summary>
        /// Наименование.
        /// </summary>
        // *** Start programmer edit section *** (Улицы.Наименование CustomAttributes)

        // *** End programmer edit section *** (Улицы.Наименование CustomAttributes)
        [StrLen(255)]
        public virtual string Наименование
        {
            get
            {
                // *** Start programmer edit section *** (Улицы.Наименование Get start)

                // *** End programmer edit section *** (Улицы.Наименование Get start)
                string result = this.fНаименование;
                // *** Start programmer edit section *** (Улицы.Наименование Get end)

                // *** End programmer edit section *** (Улицы.Наименование Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Улицы.Наименование Set start)

                // *** End programmer edit section *** (Улицы.Наименование Set start)
                this.fНаименование = value;
                // *** Start programmer edit section *** (Улицы.Наименование Set end)

                // *** End programmer edit section *** (Улицы.Наименование Set end)
            }
        }
        
        /// <summary>
        /// Улицы.
        /// </summary>
        // *** Start programmer edit section *** (Улицы.Город CustomAttributes)

        // *** End programmer edit section *** (Улицы.Город CustomAttributes)
        [PropertyStorage(new string[] {
                "Город"})]
        [NotNull()]
        public virtual IIS.Proba_4.Город Город
        {
            get
            {
                // *** Start programmer edit section *** (Улицы.Город Get start)

                // *** End programmer edit section *** (Улицы.Город Get start)
                IIS.Proba_4.Город result = this.fГород;
                // *** Start programmer edit section *** (Улицы.Город Get end)

                // *** End programmer edit section *** (Улицы.Город Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Улицы.Город Set start)

                // *** End programmer edit section *** (Улицы.Город Set start)
                this.fГород = value;
                // *** Start programmer edit section *** (Улицы.Город Set end)

                // *** End programmer edit section *** (Улицы.Город Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "УлицыE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View УлицыE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("УлицыE", typeof(IIS.Proba_4.Улицы));
                }
            }
            
            /// <summary>
            /// "УлицыL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View УлицыL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("УлицыL", typeof(IIS.Proba_4.Улицы));
                }
            }
        }
    }
}
